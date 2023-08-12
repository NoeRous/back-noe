import { Inject, Injectable } from '@nestjs/common';
import { InstitutionPosition } from 'src/modules/institution_position/institution_position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InstitutionPositionService {


    constructor(
        @Inject('INSTITUTION_POSITION_REPOSITORY')
        private institutionPositionRepository: Repository<InstitutionPosition>
    ){}

    async findAll(): Promise<InstitutionPosition[]>{
        return this.institutionPositionRepository.find({
            relations:{
                position:true,
                institution:true
            },
            order:{id:'DESC'}
        });
    }

}
