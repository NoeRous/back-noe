import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplicantService } from 'src/services/applicant/applicant.service';

@ApiTags('Postulante')
@Controller('applicant')
export class ApplicantController {

    constructor(private applicantService:ApplicantService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this.applicantService.findAll();
    }
}
