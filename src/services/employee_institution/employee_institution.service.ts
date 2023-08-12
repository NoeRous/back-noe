import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeInstitutionDto } from 'src/controllers/employee_institution/create-employee-institution.dto';
import { Announcement } from 'src/modules/announcement/announcement.entity';
import { Employee } from 'src/modules/employee/employee.entity';
import { EmployeeInstitution } from 'src/modules/employee_institution/employee_institution.entity';
import { Institution } from 'src/modules/institution/institution.entity';
import { Person } from 'src/modules/person/person.entity';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeInstitutionService {

    constructor(
        @Inject('EMPLOYEE_INSTITUTION_REPOSITORY')
        private employeeInstitutionRepository: Repository<EmployeeInstitution>,
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
        @Inject('INSTITUTION_REPOSITORY')
        private institutionRepository: Repository<Institution>,
        @Inject('INSTITUTION_REPOSITORY')
        private announcementRepository: Repository<Announcement>,
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>,
    ){}


    async create(employeeInstitution: CreateEmployeeInstitutionDto,req_user:any): Promise<EmployeeInstitution> {
        const employee: Employee = await this.employeeRepository.findOneBy({id:employeeInstitution.employee_id });

        if(!employee){
            throw new NotFoundException('Empleado no encontrado');
        }

        const institution: Institution = await this.institutionRepository.findOneBy({id:employeeInstitution.institution_id });

        if(!institution){
            throw new NotFoundException('Institución no encontrado');
        }

        const announcement: Announcement = await this.announcementRepository.findOneBy({id:employeeInstitution.announcement_id });

        if(!announcement){
            throw new NotFoundException('Convocatoria no encontrada');
        }

        const employeIntitutionNew = new EmployeeInstitution();

        employeIntitutionNew.announcement = announcement;
        employeIntitutionNew.employee = employee;
        employeIntitutionNew.institution = institution;
        employeIntitutionNew.created_by = req_user.userId;


        return this.employeeInstitutionRepository.save(employeIntitutionNew)
    }

    async findInstitutionsByAnnouncement(req_user:any,announcementId :number): Promise<EmployeeInstitution[]> {
        const user: User = await this.userRepository.findOne({ relations: { person: true }, where: { id: req_user.userId } });
        const person: Person = await this.personRepository.findOneBy({ id: user.person.id });
        const employee: Employee = await this.employeeRepository.findOne({relations:['employeeInstitution.institution'], where: { person:{id:person.id}}});

        if (!employee) {
            throw new NotFoundException('Usted no tiene acceso a las bandejas por que no es es un Empleado');
        }
        const employeeInstitutions: EmployeeInstitution[] = await this.employeeInstitutionRepository.find({relations: ['institution'], where: { employee: { id: employee.id }, announcement: { id: announcementId } } });
        return employeeInstitutions
    }
}
