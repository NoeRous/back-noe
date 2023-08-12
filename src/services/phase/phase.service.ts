import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Phase } from 'src/modules/phase/phase.entity';
import { PhaseSequence } from 'src/modules/phase_sequence/phase_sequence.entity';
import { Role } from 'src/modules/role/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhaseService {

    constructor(
        @Inject('PHASE_REPOSITORY')
        private phaseRepository: Repository<Phase>,
        @Inject('ROLE_REPOSITORY')
        private roleRepository: Repository<Role>,
        @Inject('PHASE_SEQUENCE_REPOSITORY')
        private phaseSequenceRepository: Repository<PhaseSequence>,
      
    ){}

    // async findAnnouncementCurrent(): Promise<Announcement[]>{
    //     return this.announcementRepository.find();
    // }

    async findNextPhase(req_user:any): Promise<PhaseSequence[]>{
        //adicionar convocatoria
        const role: Role = await this.roleRepository.findOne({ where: { id: req_user.roleId } });//aqui debera incluirse a la convocatori
        const currentPhase: Phase = await this.phaseRepository.findOne({ where: { role: { id: role.id } } }); //ojo solo un rol
        if(!currentPhase){
            throw new NotFoundException('Su rol no pertenece a ninguna Fase para la bandeja');
        }
        return await this.phaseSequenceRepository.find({ relations:['nextPhase'], where: { currentPhase:{id:currentPhase.id} } }); //ojo solo un rol
    }

    async findPhaseByAnnouncement(req_user:any,announcementId:number): Promise<Phase[]>{
        const phase: Phase[] = await this.phaseRepository.find({ where: { announcement: {id:announcementId} }, order:{sequence:'ASC'}});
        return phase
    }

    async findPhaseByAnnouncementCurrent(announcementId:number): Promise<Phase[]>{
        const dateCurrent = new Date();
        return this.phaseRepository
          .createQueryBuilder('p')
          .where(':dateCurrent >= p.date_init AND :dateCurrent <= p.date_end', { dateCurrent })
          .andWhere(':announcementId = p.announcement_id', { announcementId })
          .getMany();
    }
}
