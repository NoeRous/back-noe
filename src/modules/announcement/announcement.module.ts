import { Module } from '@nestjs/common';
import { AnnouncementController } from 'src/controllers/announcement/announcement.controller';
import { DatabaseModule } from 'src/database/database.module';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';

@Module({
    imports: [DatabaseModule],
    controllers: [AnnouncementController],
    providers: [
        ...announcementProviders,
        AnnouncementService
    ]
})
export class AnnouncementModule {}
