import { Inject, Injectable } from '@nestjs/common';
import { TPartGender } from 'src/modules/t_part_gender/t_part_gender.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TParGenderService {

    constructor(
        @Inject('T_PAR_GENDER_REPOSITORY')
        private tParGenderRepository: Repository<TPartGender>
    ){}


    findById(id:number): Promise<TPartGender>{
        return this.tParGenderRepository.findOneBy({id:id});
    }

    async findAll(): Promise<TPartGender[]>{
        return this.tParGenderRepository.find();
    }
}
