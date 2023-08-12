import { DataSource } from "typeorm";
import { Announcement } from "src/modules/announcement/announcement.entity";

export const announcementProviders = [
    {
        provide: 'ANNOUNCEMENT_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Announcement),
        inject: ['DATA_SOURCE']
    }
]