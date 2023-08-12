import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRepresentativeDto } from 'src/controllers/representative/create-representative.dto';
import { UpdateRepresentativeDto } from 'src/controllers/representative/update-representative.dto';
import { Representative } from 'src/modules/representative/representative.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RepresentativeService {

    constructor(
        @Inject('REPRESENTATIVE_REPOSITORY')
        private representativeRepository: Repository<Representative>
    ){}

    async create(representative: CreateRepresentativeDto): Promise<Representative> {
        return this.representativeRepository.save(representative)
    }

    async updateById(id: number, updateData: Partial<UpdateRepresentativeDto>): Promise<Representative> {

        const representative = await this.representativeRepository.findOneBy({id:id});
        if (!representative) {
            throw new NotFoundException('Representante externo no encontrado');
        }
        const updatedRepresentative = Object.assign(representative, updateData);   
        return this.representativeRepository.save(updatedRepresentative);
    }

    async deleteById(id: number): Promise<void> {
        const representative = await this.representativeRepository.findOneBy({id:id});
        if (!representative) {
            throw new NotFoundException('Representante externo no encontrado');
        }
        await this.representativeRepository.softDelete(id);
    }
}
