import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommissionExternalSaveDto } from 'src/controllers/commission_external/create-commission-external-save.dto';
import { UpdateCommissionExternalDto } from 'src/controllers/commission_external/update-commission-external.dto';
import { CommissionExternal } from 'src/modules/commission_external/commission_external.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommissionExternalService {

    constructor(
        @Inject('COMMISSION_EXTERNAL_REPOSITORY')
        private commissionExternalRepository: Repository<CommissionExternal>
    ){}


    async create(commisionExternal: CreateCommissionExternalSaveDto): Promise<CommissionExternal> {
        return this.commissionExternalRepository.save(commisionExternal)
    }

    findById(id:number){
        return this.commissionExternalRepository.findOne({relations:['representative','commission'],where:{id:id}});
    }

    async updateById(id: number, updateData: Partial<UpdateCommissionExternalDto>): Promise<CommissionExternal> {
        const commissionExternal = await this.commissionExternalRepository.findOneBy({id:id});
        if (!commissionExternal) {
            throw new NotFoundException('Comisión externo no encontrado!');
        }
        const updatedCommissionExternal = Object.assign(commissionExternal, updateData);   
        return this.commissionExternalRepository.save(updatedCommissionExternal);
    }

    async deleteById(id: number): Promise<void> {
        const commissionExternal = await this.commissionExternalRepository.findOneBy({id:id});
        if (!commissionExternal) {
          throw new NotFoundException('Comisión externo no encontrado!');
        }
        await this.commissionExternalRepository.softDelete(id);
    }
}
