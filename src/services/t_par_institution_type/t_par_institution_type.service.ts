import { Inject, Injectable } from '@nestjs/common';
import { TPartInstitutionType } from 'src/modules/t_par_institution_type/t_par_institution_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TParInstitutionTypeService {

    constructor(
        @Inject('T_PAR_INSTITUTION_TYPE_REPOSITORY')
        private tParInstitutionTypeRepository: Repository<TPartInstitutionType>
    ){}

    async findAll(): Promise<TPartInstitutionType[]>{
        return this.tParInstitutionTypeRepository.find();
    }
}
