import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { PositionService } from 'src/services/position/position.service';

@ApiTags("Cargos")
@Controller('position')
export class PositionController {

    constructor(private readonly _positionService: PositionService){}

    @UseGuards(AuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._positionService.findAll();
    }

}
