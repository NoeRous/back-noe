import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InstitutionService } from 'src/services/institution/institution.service';

@ApiTags("Instituciones")
@Controller('institution')
export class InstitutionController {

    constructor(private readonly _institutionService: InstitutionService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._institutionService.findAll();
    }
}
