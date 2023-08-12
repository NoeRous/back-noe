import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCommissionAssignedDto } from 'src/controllers/commission_assigned/update-commission-assigned.dto';
import { CommissionAssigned } from 'src/modules/commission_assigned/commission_assigned.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommissionAssignedService {
    constructor(
        @Inject('COMMISSION_ASSIGNED_REPOSITORY')
        private commissionAssignedRepository: Repository<CommissionAssigned>
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
        return this.commissionAssignedRepository.save(updatedCommissionAssigned);
    }
}
