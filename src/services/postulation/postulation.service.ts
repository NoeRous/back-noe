import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Pagination, paginate, paginateRaw } from 'nestjs-typeorm-paginate';
import { format } from 'path';
import { CreatePostulationDto } from 'src/controllers/postulation/create-postulation.dto';
import { Announcement } from 'src/modules/announcement/announcement.entity';
import { AnnouncementInstitutionPosition } from 'src/modules/announcement_institution_position/announcement_institution_position.entity';
import { Applicant } from 'src/modules/aplicant/aplicant.entity';
import { Employee } from 'src/modules/employee/employee.entity';
import { EmployeeInstitution } from 'src/modules/employee_institution/employee_institution.entity';
import { Institution } from 'src/modules/institution/institution.entity';
import { InstitutionPosition } from 'src/modules/institution_position/institution_position.entity';
import { Person } from 'src/modules/person/person.entity';
import { Phase } from 'src/modules/phase/phase.entity';
import { Position } from 'src/modules/position/position.entity';
import { Postulation } from 'src/modules/postulation/postulation.entity';
import { PostulationPhase } from 'src/modules/postulation_phase/postulation_phase.entity';
import { PostulationState } from 'src/modules/postulation_state/postulation_state.entity';
import { PostulationTest } from 'src/modules/postulation_test/postulation_test.entity';
import { Role } from 'src/modules/role/role.entity';
import { TParPositionType } from 'src/modules/t_par_position_type/t_par_position_type.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostulationService {

    constructor(
        @Inject('POSTULATION_REPOSITORY')
        private postulationRepository: Repository<Postulation>,
        @Inject('APPLICANT_REPOSITORY')
        private applicantRepository: Repository<Applicant>,
        @Inject('ANNOUNCEMENT_INSTITUTION_POSITION_REPOSITORY')
        private announcementInstitutionPositionRepository: Repository<AnnouncementInstitutionPosition>,
        @Inject('INSTITUTION_POSITION_REPOSITORY')
        private institutionPositionRepository: Repository<InstitutionPosition>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
        @Inject('PHASE_REPOSITORY')
        private phaseRepository: Repository<Phase>,
        @Inject('POSTULATION_STATE_REPOSITORY')
        private postulationStateRepository: Repository<PostulationState>,
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>,
        @Inject('POSTULATION_PHASE_REPOSITORY')
        private postulationPhaseRepository: Repository<PostulationPhase>,
        @Inject('POSTULATION_TEST_REPOSITORY')
        private postulationTestRepository: Repository<PostulationTest>,
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
        @Inject('EMPLOYEE_INSTITUTION_REPOSITORY')
        private employeeInstitutionRepository: Repository<EmployeeInstitution>,
    ){}

    async create(postulation: CreatePostulationDto,req_user:any): Promise<Postulation> {

     try{

            const user: User = await this.userRepository.findOne({relations:{person:true},where: {id:req_user.userId}});
            const person: Person = await this.personRepository.findOneBy({id:user.person.id})
            const aplicant: Applicant = await this.applicantRepository.findOne({where:{person:{id:person.id}}})
            if (!aplicant) {
                throw new NotFoundException('No esta registrado como postulante');
            }
            const institutionPosition: InstitutionPosition = await this.institutionPositionRepository.findOne({ where: {institution:{ id : postulation.institution_id},position:{id:postulation.position_id}}})
            const announcementInstitutionPosition: AnnouncementInstitutionPosition = await this.announcementInstitutionPositionRepository.findOne({where: {institutionPosition:{id:institutionPosition.id},announcement:{id:postulation.announcent_id}}}) 
            const postulationState: PostulationState = await this.postulationStateRepository.findOne({where:{name:'EN PROCESO'}});
            const phase: Phase = await this.phaseRepository.findOne({where:{announcement:{id:postulation.announcent_id},sequence:1}});
            const postulationNew = new Postulation();
            postulationNew.voucher = postulation.voucher
            postulationNew.voucher_url = postulation.voucher_url
            postulationNew.applicant = aplicant;
            postulationNew.created_by = req_user.userId;
            postulationNew.announcementInstitutionPosition = announcementInstitutionPosition;
            postulationNew.postulationState = postulationState
            postulationNew.currentPhase = phase

            return this.postulationRepository.save(postulationNew);

        } catch (error) {

            throw new BadRequestException(error.message);   
        }
    }

    findPostulationsByIdApplicant(id:number){
        return this.postulationRepository.find({relations:{applicant:true},where:{applicant:{id:id}}});
    }

    findById(id:number){
        return this.postulationRepository.findOne({relations:['applicant','applicant.person','announcementInstitutionPosition.announcement','announcementInstitutionPosition.institutionPosition.institution','announcementInstitutionPosition.institutionPosition.position'],where:{id:id}});
    }

    async findAll(req_user:any): Promise<any>{
        const user: User = await this.userRepository.findOne({relations:{person:true},where: {id:req_user.userId}});
        const person: Person = await this.personRepository.findOneBy({id:user.person.id})
        const aplicant: Applicant = await this.applicantRepository.findOne({where:{person:{id:person.id}}})
        //
        const query = this.postulationRepository.createQueryBuilder('p')
            .select('a.name', 'announcement_name')
            .addSelect('i.name', 'institution_name')
            .addSelect('tppt.name', 'position_type_name')
            .addSelect('p2.name', 'position_name')
            .addSelect('p.voucher', 'voucher')
            .addSelect('p.created_at', 'created_at')
            .addSelect('p.voucher_url', 'voucher_url')
            .addSelect('p.id', 'id')
            .addSelect('ps.name', 'postulation_state_name')
            .addSelect('ph.name', 'current_phase_name')
            .innerJoin(AnnouncementInstitutionPosition, 'aip', 'p.announcement_institution_position_id = aip.id')
            .innerJoin(Announcement, 'a', 'a.id = aip.announcement_id')
            .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
            .innerJoin(Position, 'p2', 'p2.id = ip.position_id')
            .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
            .innerJoin(TParPositionType, 'tppt', 'tppt.id = p2.t_par_position_type_id')
            .innerJoin(PostulationState, 'ps', 'ps.id = p.postulation_state_id')
            .innerJoin(Phase, 'ph', 'ph.id = p.current_phase_id')
            .where('p.applicant_id = :applicantId', { applicantId: aplicant.id })
            .getRawMany();

            const result = await query;

            return result;
    }

    async inbox(req_user: any, page: number, limit: number,announcementId:number, institutionId:number): Promise<Pagination<any>> { 
        
        console.log('institutionId  -->',institutionId)
        const user: User = await this.userRepository.findOne({ relations: { person: true }, where: { id: req_user.userId } });
        const person: Person = await this.personRepository.findOneBy({ id: user.person.id });
      
        const role: Role = await this.roleRepository.findOne({ where: { id: req_user.roleId } });

        const employee: Employee = await this.employeeRepository.findOne({relations:['employeeInstitution.institution'], where: { person:{id:person.id}}});

        if (!employee) {
            throw new NotFoundException('Usted no tiene acceso a las bandejas por que no es es un Empleado');
        }

        const employeeInstitutions : EmployeeInstitution[] = await this.employeeInstitutionRepository.find({relations:['institution'],where:{employee:{id:employee.id},announcement:{id:announcementId}}});

        console.log('employeeInstitutions: ',employeeInstitutions);
        if (employeeInstitutions.length == 0 && institutionId == 0 ) {
            throw new NotFoundException('Usted no tiene acceso a las bandejas ya que no tiene asignado Institucion(es)');
        }
        const institutions = [];

        if (institutionId > 0) {
            institutions.push(institutionId);
        }else{
            for(let employeeInstitution of employeeInstitutions){
                institutions.push(employeeInstitution.institution.id);
            }
        }

        const phase: Phase = await this.phaseRepository.findOne({ where: { role: { id: role.id },announcement:{id: announcementId } } }); //ojo solo un rol
      
        if (!phase) {
          throw new NotFoundException('Usted no tiene acceso a las bandejas con su Rol o no pertenece al flujo de la convocatoria');
        }
    
        const query = this.postulationRepository.createQueryBuilder('p')
          .select('a.name', 'announcement_name')
          .addSelect('i.name', 'institution_name')
          .addSelect('tppt.name', 'position_type_name')
          .addSelect('p2.name', 'position_name')
          .addSelect('p.voucher', 'voucher')
          .addSelect('p.created_at', 'created_at')
          .addSelect('p.voucher_url', 'voucher_url')
          .addSelect('p.id', 'id')
          .addSelect('ps.name', 'postulation_state_name')
          .addSelect('ph.name', 'current_phase_name')
          .addSelect('p.is_valid', 'is_valid')
          .addSelect('pe.last_name', 'person_last_name')
          .addSelect('pe.mothers_last_name', 'person_mothers_last_name')
          .addSelect('pe.husband_last_name', 'person_husband_last_name')
          .addSelect('pe.firts_name', 'person_firts_name')
          .addSelect('pe.second_name', 'person_second_name')
          .addSelect('pe.identity_card', 'person_identity_card')
          .innerJoin(AnnouncementInstitutionPosition, 'aip', 'p.announcement_institution_position_id = aip.id')
          .innerJoin(Announcement, 'a', 'a.id = aip.announcement_id')
          .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
          .innerJoin(Position, 'p2', 'p2.id = ip.position_id')
          .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
          .innerJoin(TParPositionType, 'tppt', 'tppt.id = p2.t_par_position_type_id')
          .innerJoin(PostulationState, 'ps', 'ps.id = p.postulation_state_id')
          .innerJoin(Phase, 'ph', 'ph.id = p.current_phase_id')
          .innerJoin(Applicant, 'ap', 'ap.id = p.applicant.id')
          .innerJoin(Person, 'pe', 'pe.id = ap.person_id')
          .where('p.current_phase_id = :phaseId', { phaseId: phase.id })
          .andWhere('a.id = :announcementId', { announcementId: announcementId })
          .andWhere("i.id IN (:...institutions)", {institutions: institutions });
         // .where("user.name IN (:...names)", { names: [ "Timber", "Cristal", "Lina" ] })
      
        const result = await paginateRaw(query, { page, limit });
      
        return result;
      }

      async updateIsvalid(isValid:boolean, postulations: any[],req:any): Promise<any> {
        try{

            for(let postulation of postulations ){
                let post = await this.postulationRepository.findOne({where:{id:postulation.id}});
                post.is_valid = isValid
                await this.postulationRepository.save(post)
            }

            return true;

        } catch (error) {
    
            throw new BadRequestException(error.message);   
        }
      }

      async derived(next_phase_id:number, postulation_id: number,req_user:any): Promise<any> {
        try{
            //adionar la convocatoria
            const user: User = await this.userRepository.findOne({ relations: { person: true }, where: { id: req_user.userId } });
            const role: Role = await this.roleRepository.findOne({ where: { id: req_user.roleId } });
            const previusPhase: Phase = await this.phaseRepository.findOne({ where: { role: { id: role.id } } }); //ojo solo un rol
            if(next_phase_id == 0){
                throw new NotFoundException('Seleccione la fase a derivar');   
            }
            const nextPhase: Phase = await this.phaseRepository.findOne({where:{id:next_phase_id} });




            // for(let postulation of postulations ){
                
                let post = await this.postulationRepository.findOne({where:{id:postulation_id}});
                post.is_valid = false
                post.currentPhase = nextPhase
                await this.postulationRepository.save(post)

                let postulationPhaseNew = new PostulationPhase();
                postulationPhaseNew.pass_phase = true;
                postulationPhaseNew.previusPhase = previusPhase;
                postulationPhaseNew.currentPhase = nextPhase;
                postulationPhaseNew.created_by = req_user.userId;
                postulationPhaseNew.postulation = post;
                postulationPhaseNew.user = user;
                postulationPhaseNew.qualification = 0;

                await this.postulationPhaseRepository.save(postulationPhaseNew)
            // }

            return true;

        } catch (error) {
    
            throw new BadRequestException(error.message);   
        }
      }

      async tracking(req_user: any, isValid: boolean, page: number, limit: number,announcementId:number): Promise<Pagination<any>> {
        const user: User = await this.userRepository.findOne({ relations: { person: true }, where: { id: req_user.userId } });
        const person: Person = await this.personRepository.findOneBy({ id: user.person.id });
        const aplicant: Applicant = await this.applicantRepository.findOne({ where: { person: { id: person.id } } });
      
        const role: Role = await this.roleRepository.findOne({ where: { id: req_user.roleId } });
      
        const phase: Phase = await this.phaseRepository.findOne({ where: { role: { id: role.id },announcement:{ id: announcementId } } });
      
        console.log('announcementId',announcementId)
        const query = this.postulationRepository.createQueryBuilder('p')
          .select('a.name', 'announcement_name')
          .addSelect('i.name', 'institution_name')
          .addSelect('tppt.name', 'position_type_name')
          .addSelect('p2.name', 'position_name')
          .addSelect('p.voucher', 'voucher')
          .addSelect('p.created_at', 'created_at')
          .addSelect('p.voucher_url', 'voucher_url')
          .addSelect('p.id', 'id')
          .addSelect('ps.name', 'postulation_state_name')
          .addSelect('ph.name', 'current_phase_name')
          .addSelect('p.is_valid', 'is_valid')
          .addSelect('pe.last_name', 'person_last_name')
          .addSelect('pe.mothers_last_name', 'person_mothers_last_name')
          .addSelect('pe.husband_last_name', 'person_husband_last_name')
          .addSelect('pe.firts_name', 'person_firts_name')
          .addSelect('pe.second_name', 'person_second_name')
          .addSelect('pe.identity_card', 'person_identity_card')
          .innerJoin(AnnouncementInstitutionPosition, 'aip', 'p.announcement_institution_position_id = aip.id')
          .innerJoin(Announcement, 'a', 'a.id = aip.announcement_id')
          .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
          .innerJoin(Position, 'p2', 'p2.id = ip.position_id')
          .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
          .innerJoin(TParPositionType, 'tppt', 'tppt.id = p2.t_par_position_type_id')
          .innerJoin(PostulationState, 'ps', 'ps.id = p.postulation_state_id')
          .innerJoin(Phase, 'ph', 'ph.id = p.current_phase_id')
          .innerJoin(Applicant, 'ap', 'ap.id = p.applicant.id')
          .innerJoin(Person, 'pe', 'pe.id = ap.person_id')
          .where('a.id = :announcementId', { announcementId: announcementId });
          //.where('p.current_phase_id = :phaseId', { phaseId: phase.id })
          //.andWhere('p.is_valid = :isValid', { isValid: isValid })
          
      
        const result = await paginateRaw(query, { page, limit });
      
        return result;
      }

      async verifyPhase(req_user:any, postulationId: number, phaseId:number): Promise<boolean> {
        const verifyPhase: Phase = await this.phaseRepository.findOne({ where: { id:phaseId} });
        const postulation = await this.postulationRepository.findOne({relations:['currentPhase'],where:{id:postulationId}});
        if(verifyPhase.sequence > postulation.currentPhase.sequence){
            throw new NotFoundException('No tiene habilitado la fase');
        }else{
            if (verifyPhase.sequence == 2 ) {//examen
                //aqui verificar si ya realizo el examen 
                const postulationTest = await this.postulationTestRepository.findOne({where:{postulation:{id:postulation.id}}});
                console.log('postulationTest',postulationTest)
                if(postulationTest){
                    throw new NotFoundException('ya realizó el examen');
                }
            }
        }
       return true;
      }


}
