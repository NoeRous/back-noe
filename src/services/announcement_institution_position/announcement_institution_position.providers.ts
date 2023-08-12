import { DataSource } from "typeorm";
import { AnnouncementInstitutionPosition } from "src/modules/announcement_institution_position/announcement_institution_position.entity";

export const announcementInstitutionPositionProviders = [
    {
        provide: 'ANNOUNCEMENT_INSTITUTION_POSITION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(AnnouncementInstitutionPosition),
        inject: ['DATA_SOURCE']
    }
]