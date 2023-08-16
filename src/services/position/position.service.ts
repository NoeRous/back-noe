import { Inject, Injectable } from '@nestjs/common';
import { Position } from 'src/modules/position/position.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class PositionService {

    constructor(
        @Inject('POSITION_REPOSITORY')
        private positionRepository: Repository<Position>
    ){}

    async findAll(): Promise<Position[]>{
        return this.positionRepository.find({order:{name:'ASC'}});
    }

    async findByArrayIds(ids: number[]): Promise<Position[]> {
        return this.positionRepository.find({
            where: {
                id: In(ids),
            },
            order:{name:'ASC'}
        });
    }
}
