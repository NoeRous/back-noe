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
        private phaseSequenceRepository: Repository<PhaseSequence>
      
    ){}

    // async findAnnouncementCurrent(): Promise<Announcement[]>{
    //     return this.announcementRepository.find();
    // }

    async findNextPhase(announcementId:number): Promise<PhaseSequence[]>{
        const currentPhase: Phase[] = await this.findPhaseByAnnouncementCurrent(announcementId);
        if(currentPhase.length<1){
            throw new NotFoundException('Su usurio no pertenece a ninguna comisión de la Fase actual para la bandeja');
        }
        return await this.phaseSequenceRepository.find({ relations:['nextPhase'], where: { currentPhase:{id:currentPhase[0].id} } });
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
