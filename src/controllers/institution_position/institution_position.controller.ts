import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InstitutionService } from 'src/services/institution/institution.service';
import { InstitutionPositionService } from 'src/services/institution_position/institution_position.service';

@ApiTags("Cargos de las Instituciones")
@Controller('institution-position')
export class InstitutionPositionController {

    constructor(private readonly _institutionPositionService: InstitutionPositionService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._institutionPositionService.findAll();
    }
}
