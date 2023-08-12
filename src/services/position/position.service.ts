import { Inject, Injectable } from '@nestjs/common';
import { Position } from 'src/modules/position/position.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {

    constructor(
        @Inject('POSITION_REPOSITORY')
        private positionRepository: Repository<Position>
    ){}

    async findAll(): Promise<Position[]>{
        return this.positionRepository.find();
    }
}
