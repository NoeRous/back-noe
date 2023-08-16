import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TParPositionTypeService } from 'src/services/t_par_position_type/t_par_position_type.service';
import { CreateTParPositionTypeDto } from './create-t-par-position-type.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateTParPositionTypeDto } from './update-t-par-position-type.dto';

@ApiTags("Tipos de cargo")
@Controller('position-type')
export class TParPositionTypeController {

    constructor(private readonly tParPositionTypeService: TParPositionTypeService){}

    @Get()
    @ApiOperation({ summary: 'Listar todos los tipos de cargos' })
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this.tParPositionTypeService.findAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un tipo de cargo' })
    @HttpCode(HttpStatus.OK)
    findTParPositionTypeById(@Param('id',ParseIntPipe) id:number){
        return this.tParPositionTypeService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear tipos de cargos' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() positionTypeData: CreateTParPositionTypeDto){
        let responsePositionType = await this.tParPositionTypeService.create(positionTypeData)
        return responsePositionType
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar tipos de cargo' })
    @HttpCode(HttpStatus.OK)
    async updateTParPositionTypeById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateTParPositionTypeDto>) {
        return this.tParPositionTypeService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar tipos de cargo' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.tParPositionTypeService.deleteById(id);
    }

}
