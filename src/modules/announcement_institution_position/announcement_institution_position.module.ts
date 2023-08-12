import { Module } from '@nestjs/common';
import { AnnouncementInstitutionPositionController } from 'src/controllers/announcement_institution_position/announcement_institution_position.controller';
import { DatabaseModule } from 'src/database/database.module';
import { announcementProviders } from 'src/services/announcement/announcement.providers';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { announcementInstitutionPositionProviders } from 'src/services/announcement_institution_position/announcement_institution_position.providers';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { AnnouncementModule } from '../announcement/announcement.module';
import { Announcement } from '../announcement/announcement.entity';

@Module({
    imports: [DatabaseModule],
    controllers: [AnnouncementInstitutionPositionController],
    providers: [
        ...announcementInstitutionPositionProviders,
        ...announcementProviders,
        AnnouncementInstitutionPositionService,
        AnnouncementService
    ]
})
export class AnnouncementInstitutionPositionModule {}
