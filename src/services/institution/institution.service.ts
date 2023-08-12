import { Inject, Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Institution } from 'src/modules/institution/institution.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionService {

    constructor(
        @Inject('INSTITUTION_REPOSITORY')
        private institutionRepository: Repository<Institution>
    ){}

    async findAll(): Promise<Institution[]>{
        return this.institutionRepository.find({ relations: {
            t_par_institution_type: true,
        },});
    }
}
