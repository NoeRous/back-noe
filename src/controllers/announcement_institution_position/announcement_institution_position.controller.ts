import { Controller, Get, HttpCode, HttpStatus, Param, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';

@ApiTags('Cargos de las instituciones disponibles de la convocatoria')
@Controller('announcement-institution-position')
export class AnnouncementInstitutionPositionController {

    constructor(private readonly _announcementInstitutionPositionService: AnnouncementInstitutionPositionService){}


    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        var announcementId = req.query.announcementId;
        return this._announcementInstitutionPositionService.findAll(announcementId);
    }

}
