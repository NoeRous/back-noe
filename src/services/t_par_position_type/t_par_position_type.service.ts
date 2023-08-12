import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTParPositionTypeDto } from 'src/controllers/t_par_position_type/create-t-par-position-type.dto';
import { UpdateTParPositionTypeDto } from 'src/controllers/t_par_position_type/update-t-par-position-type.dto';
import { TParPositionType } from 'src/modules/t_par_position_type/t_par_position_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TParPositionTypeService {

    constructor(
        @Inject('T_PAR_POSITION_TYPE_REPOSITORY')
        private tParPositionTypeRepository: Repository<TParPositionType>
    ){}

    async findAll(): Promise<TParPositionType[]>{
        return this.tParPositionTypeRepository.find();
    }

    findById(id:number){
        return this.tParPositionTypeRepository.findOneBy({id:id});
    }

    async create(positionType: CreateTParPositionTypeDto): Promise<CreateTParPositionTypeDto> {
        return this.tParPositionTypeRepository.save(positionType)
    }

    async updateById(id: number, updateData: Partial<UpdateTParPositionTypeDto>): Promise<UpdateTParPositionTypeDto> {
        const tParPositionType = await this.tParPositionTypeRepository.findOneBy({id:id});
        if (!tParPositionType) {
            throw new NotFoundException('Position type not found');
        }
        const updatedTParPositionType = Object.assign(tParPositionType, updateData);
        return this.tParPositionTypeRepository.save(updatedTParPositionType);
    }

    async deleteById(id: number): Promise<void> {
        const tParPositionType = await this.tParPositionTypeRepository.findOneBy({id:id});
        if (!tParPositionType) {
          throw new NotFoundException('Position type not found!');
        }
        await this.tParPositionTypeRepository.delete(id);
    }
}
