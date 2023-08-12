import { Inject, Injectable } from '@nestjs/common';
import { Commission } from 'src/modules/commission/commission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommissionService {
    constructor(
        @Inject('COMMISSION_REPOSITORY')
        private commissionRepository: Repository<Commission>
    ){}

    findById(id:number){
        return this.commissionRepository.findOne({relations:['commissionExternal.representative','commissionInternal.person'],where:{id:id}});
    }

    findByIdAssigned(id:number){
        return this.commissionRepository.findOne({relations:['commissionAssigned','commissionAssigned.announcementInstitutionPosition.institutionPosition.institution','commissionAssigned.announcementInstitutionPosition.institutionPosition.position.t_par_position_type'],where:{id:id}});
    }
}
