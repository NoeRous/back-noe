import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TParGenderService } from 'src/services/t_par_gender/t_par_gender.service';

@ApiTags('Genero')
@Controller('gender')
export class TParGenderController {
    constructor(private readonly _tParGenderService: TParGenderService){}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Listado de generos' })
    async findAll(){
        return this._tParGenderService.findAll();
    }

}
