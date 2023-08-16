import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Announcement } from 'src/modules/announcement/announcement.entity';
import { AnnouncementInstitutionPosition } from 'src/modules/announcement_institution_position/announcement_institution_position.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class AnnouncementInstitutionPositionService {

    constructor(
        @Inject('ANNOUNCEMENT_INSTITUTION_POSITION_REPOSITORY')
        private announcementInstitutionPositionRepository: Repository<AnnouncementInstitutionPosition>,
        @Inject('ANNOUNCEMENT_REPOSITORY')
        private announcementRepository: Repository<Announcement>,
    ){}

    async findAll(announcementId:any): Promise<AnnouncementInstitutionPosition[]>{
        var querywhere = {};
        if (announcementId) {
            querywhere = {announcement:{id:announcementId}}
        }

        return this.announcementInstitutionPositionRepository.find({
            relations:[
                'institutionPosition', 
                'institutionPosition.institution',
                'institutionPosition.institution.t_par_institution_type',
                'institutionPosition.position',
                'announcement'
            ],
            where:querywhere
        });
    }

    async findInstitutionByConditions(announcement_id: number): Promise<any> {
        const announcement: Announcement = await this.announcementRepository.findOne({ where: { id: announcement_id }});
        
        if (!announcement) {
            throw new Error("Announcement not found");
        }
    
        console.log("announcement---",announcement);
        //return this.announcementInstitutionPositionRepository.find();
        // const loadedPosts = await dataSource.getRepository(Post).findBy({
        //     title: Like("%out #%"),
        // })

        return this.announcementInstitutionPositionRepository.find({relations:{announcement:true}})
       // return this.announcementInstitutionPositionRepository.findOne({ relations: ['announcement', 'announcement'] });
    }

    async findAnnouncementInstitutionPosition(announcementId: number,institutionId:number,positionId:number): Promise<any> {
        const announcementInstitutionPosition = await this.announcementInstitutionPositionRepository.find({where:{institutionPosition:{institution:{id:institutionId},position:{id:positionId}},announcement:{id:announcementId}}})
        if (announcementInstitutionPosition.length < 1) {
            throw new NotFoundException("No se encontro la convocatoria, institución y cargo");
        }
        return announcementInstitutionPosition;
    }

    async findByArrayIds(ids: number[]): Promise<AnnouncementInstitutionPosition[]> {
        return this.announcementInstitutionPositionRepository.find({
            where: {
                id: In(ids),
            },
            order:{id:'ASC'}
        });
    }
}
