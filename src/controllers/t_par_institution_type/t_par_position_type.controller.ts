import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TParInstitutionTypeService } from 'src/services/t_par_institution_type/t_par_institution_type.service';
import { TParPositionTypeService } from 'src/services/t_par_position_type/t_par_position_type.service';

@ApiTags("Institution Type")
@Controller('institution-type')
export class TParInstitutionTypeController {

    constructor(private readonly _tParInstitutionTypeService: TParInstitutionTypeService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._tParInstitutionTypeService.findAll();
    }
}
