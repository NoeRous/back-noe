import { IsNotEmpty } from "class-validator";
import { Announcement } from "src/modules/announcement/announcement.entity";
import { InstitutionPosition } from "src/modules/institution_position/institution_position.entity";

export class CreateAnnouncementInstitutionPositionDto{
    @IsNotEmpty()
    number_available: number;

    institutionPosition: InstitutionPosition

    announcement:Announcement
}