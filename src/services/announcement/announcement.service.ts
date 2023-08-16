import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnnouncementDto } from 'src/controllers/announcement/create-annoucement.dto';
import { UpdateAnnouncementDto } from 'src/controllers/announcement/update-announement.dto';
import { Announcement } from 'src/modules/announcement/announcement.entity';
import { AnnouncementInstitutionPosition } from 'src/modules/announcement_institution_position/announcement_institution_position.entity';
import { Institution } from 'src/modules/institution/institution.entity';
import { InstitutionPosition } from 'src/modules/institution_position/institution_position.entity';
import { Position } from 'src/modules/position/position.entity';
import { TParPositionType } from 'src/modules/t_par_position_type/t_par_position_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementService {

    constructor(
        @Inject('ANNOUNCEMENT_REPOSITORY')
        private announcementRepository: Repository<Announcement>,
      
    ){}

    // async findAnnouncementCurrent(): Promise<Announcement[]>{
    //     return this.announcementRepository.find();
    // }

    async findAnnouncementCurrent(): Promise<Announcement> {
        const dateCurrent = new Date();
        return this.announcementRepository
          .createQueryBuilder('a')
          .where(':dateCurrent >= a.date_init AND :dateCurrent <= a.date_end', { dateCurrent })
          .getOne();
      }

    async findAll(): Promise<Announcement[]>{
        return this.announcementRepository.find({ order:{created_at:'DESC'}});
    }

    findById(id:number){
        return this.announcementRepository.findOneBy({id:id});
    }

    async create(announcement: CreateAnnouncementDto): Promise<CreateAnnouncementDto> {
        return this.announcementRepository.save(announcement)
    }

    async updateById(id: number, updateData: Partial<UpdateAnnouncementDto>): Promise<Announcement> {
        const announcement = await this.announcementRepository.findOneBy({id:id});
        if (!announcement) {
            throw new NotFoundException('Convocatoria no encontrada!');
        }
        const updatedAnnouncement = Object.assign(announcement, updateData);   
        return this.announcementRepository.save(updatedAnnouncement);
    }

    async deleteById(id: number): Promise<void> {
        const updatedAnnouncement = await this.announcementRepository.findOneBy({id:id});
        if (!updatedAnnouncement) {
          throw new NotFoundException('Convocatoria no encontrada!');
        }
        await this.announcementRepository.delete(id);
    }

    async findInstitutionsByAnnouncement(id: number): Promise<any> {
        return this.announcementRepository
          .createQueryBuilder('a')
          .distinct(true)
          .select('i.*')
          .innerJoin(AnnouncementInstitutionPosition, 'aip', 'a.id = aip.announcement_id')
          .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
          .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
          .where('a.id = :id', { id })
          .getRawMany();
      }
    
      async findPositionsByInstitution(anuncioId: number, institucionId: number): Promise<any> {
        return this.announcementRepository
          .createQueryBuilder('a')
          .distinct(true)
          .select('p.*')
          .innerJoin(AnnouncementInstitutionPosition, 'aip', 'a.id = aip.announcement_id')
          .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
          .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
          .innerJoin(Position, 'p', 'ip.position_id = p.id')
          .where('a.id = :anuncioId', { anuncioId })
          .andWhere('i.id = :institucionId', { institucionId })
          .getRawMany();
      }

      async findPositionsByInstitutionAndPositionType(anuncioId: number, institucionId: number, tipoId: number): Promise<any> {
        return this.announcementRepository
          .createQueryBuilder('a')
          .distinct(true)
          .select('p.*')
          .innerJoin(AnnouncementInstitutionPosition, 'aip', 'a.id = aip.announcement_id')
          .innerJoin(InstitutionPosition, 'ip', 'ip.id = aip.institution_position_id')
          .innerJoin(Institution, 'i', 'i.id = ip.institution_id')
          .innerJoin(Position, 'p', 'ip.position_id = p.id')
          .innerJoin(TParPositionType, 'tppt', 'tppt.id = p.t_par_position_type_id')
          .where('a.id = :anuncioId', { anuncioId })
          .andWhere('i.id = :institucionId', { institucionId })
          .andWhere('tppt.id = :tipoId', { tipoId })
          .getRawMany();
      }
}
