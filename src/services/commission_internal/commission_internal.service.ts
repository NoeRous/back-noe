import { Inject, Injectable } from '@nestjs/common';
import { CommissionInternal } from 'src/modules/commission_internal/commission_internal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommissionInternalService {

    constructor(
        @Inject('COMMISSION_INTERNAL_REPOSITORY')
        private commissionInternalRepository: Repository<CommissionInternal>,
    ){}

    async findCommissionByPerson(personId:number): Promise<CommissionInternal[]>{
        return this.commissionInternalRepository.find({ relations:['commission.phase','commission.commissionHeadquarter'],where:{person:{id:personId}},order:{created_at:'DESC'}});
    }
}
