import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCommissionAssignedDto } from 'src/controllers/commission_assigned/update-commission-assigned.dto';
import { CommissionAssigned } from 'src/modules/commission_assigned/commission_assigned.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CommissionInternalService } from '../commission_internal/commission_internal.service';
import { Phase } from 'src/modules/phase/phase.entity';
import { Institution } from 'src/modules/institution/institution.entity';
import { InstitutionService } from '../institution/institution.service';
import { PositionService } from '../position/position.service';
import { AnnouncementInstitutionPositionService } from '../announcement_institution_position/announcement_institution_position.service';
import { Position } from 'src/modules/position/position.entity';

@Injectable()
export class CommissionAssignedService {
    constructor(
        @Inject('COMMISSION_ASSIGNED_REPOSITORY')
        private commissionAssignedRepository: Repository<CommissionAssigned>,
        private userService: UserService,
        private commissionInternalService: CommissionInternalService,
        private institutionService:InstitutionService,
        private positionService: PositionService,
        private announcementInstitutionPositionService: AnnouncementInstitutionPositionService
    ){}


    findById(id:number){
        return this.commissionAssignedRepository.findOneBy({id:id});
    }

    async updateById(id: number, updateData: Partial<UpdateCommissionAssignedDto>): Promise<CommissionAssigned> {
        const commissionAssigned = await this.commissionAssignedRepository.findOneBy({id:id});
        if (!commissionAssigned) {
            throw new NotFoundException('commissionAssigned not found');
        }
        const updatedCommissionAssigned = Object.assign(commissionAssigned, updateData);   
        return await this.commissionAssignedRepository.save(updatedCommissionAssigned);
    }

    async commissionAssinedByPhase(req_user:any, phaseCurrent:Phase): Promise<any> {
    
        const user = await this.userService.findById(req_user.userId)

        const commissioninternal = await this.commissionInternalService.findCommissionByPerson(user.person.id);
    
        const filteredCommissions = commissioninternal.filter(commission => commission.commission.phase.id === phaseCurrent.id);
    
       //return filteredCommissions;
       
        if(filteredCommissions.length > 1)
            throw new NotFoundException('Tiene mas de una comisión asignada en la misma fase actual: '+phaseCurrent.name);
        if(filteredCommissions.length == 0)
            throw new NotFoundException('No tiene ninguna comisión asignada en la fase actual: '+phaseCurrent.name);
    
        const commissionAssigneds = filteredCommissions[0].commission.commissionAssigned

        return await commissionAssigneds ;
    }

    async commissionAssignedsInstitutions(req_user:any, phaseCurrent:Phase): Promise<Institution[]> {
    
        let idsArray = [];
        const commissionAssigneds = await this.commissionAssinedByPhase(req_user,phaseCurrent);

        idsArray = commissionAssigneds.map(commissionAssigneds => commissionAssigneds.announcementInstitutionPosition.institutionPosition.institution.id);

        return await this.institutionService.findByArrayIds(idsArray);
    }

    async commissionAssignedPositions(req_user:any, phaseCurrent:Phase, institutionId:number): Promise<Position[]> {
    
        let idsArray = [];
        const commissionAssigneds = await this.commissionAssinedByPhase(req_user,phaseCurrent);

        const filteredinstituttions = commissionAssigneds.filter(commissionAssigneds => commissionAssigneds.announcementInstitutionPosition.institutionPosition.institution.id === institutionId);
        

        idsArray = filteredinstituttions.map(filteredinstituttions => filteredinstituttions.announcementInstitutionPosition.institutionPosition.position.id);
        
        return await this.positionService.findByArrayIds(idsArray);
    }

    async commissionAssignedInstitutionPositions(req_user:any, phaseCurrent:Phase): Promise<any> {
    
        let idsArray = [];
        const commissionAssigneds = await this.commissionAssinedByPhase(req_user,phaseCurrent);

        idsArray = commissionAssigneds.map(commissionAssigneds => commissionAssigneds.announcementInstitutionPosition.id);
        
        return await this.announcementInstitutionPositionService.findByArrayIds(idsArray);
    }
}
