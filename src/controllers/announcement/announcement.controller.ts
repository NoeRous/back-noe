import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseInterceptors, ClassSerializerInterceptor, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnnouncementService } from 'src/services/announcement/announcement.service';
import { CreateAnnouncementDto } from './create-annoucement.dto';
import { UpdateAnnouncementDto } from './update-announement.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Convocatorias')
@Controller('announcement')
@UseInterceptors(ClassSerializerInterceptor)
export class AnnouncementController {
    constructor(private announcementService:AnnouncementService){}

    // @Get()
    // @ApiOperation({ summary: 'Listar todas las convocatorias' })
    // @HttpCode(HttpStatus.OK)
    // async findAll( ){
    //     return this.announcementService.findAll();
    // }


    @UseGuards(AuthGuard)
    @Get('current')
    @ApiOperation({ summary: 'Obtener  convocatoria actual' })
    @HttpCode(HttpStatus.OK)
    findAnnouncementCurrent(){
        return this.announcementService.findAnnouncementCurrent()
    }


    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todas las convocatorias' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.announcementService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una convocatoria' })
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this.announcementService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear convocatoria' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() announcementData: CreateAnnouncementDto){
          let responseAnnouncement = await this.announcementService.create(announcementData)
        
        return responseAnnouncement
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar convocatoria' })
    @HttpCode(HttpStatus.OK)
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateAnnouncementDto>) {
        return this.announcementService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar convocatoria' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.announcementService.deleteById(id);
    }

    @UseGuards(AuthGuard)
    @Get('institutions/:announcement_id')
    @ApiOperation({ summary: 'Instituciones por convocatoria' })
    @HttpCode(HttpStatus.OK)
    findInstitutionsByAnnouncement(@Param('announcement_id',ParseIntPipe) announcement_id:number){
        return this.announcementService.findInstitutionsByAnnouncement(announcement_id)
    } 

    @UseGuards(AuthGuard)
    @Get(':announcement_id/:institution_id')
    @ApiOperation({ summary: 'cargos de Instituciones por convocatoria' })
    @HttpCode(HttpStatus.OK)
    findPositionsByInstitution(
        @Param('announcement_id', ParseIntPipe) announcement_id: number,
        @Param('institution_id', ParseIntPipe) institution_id: number
    ) {
    // Accede a los valores de announcement_id y institution_id aquí
    return this.announcementService.findPositionsByInstitution(announcement_id,institution_id);
    }

    @UseGuards(AuthGuard)
    @Get(':announcement_id/:institution_id/:position_type_id')
    @ApiOperation({ summary: 'cargos de Instituciones por convocatoria y tipo de cargo' })
    @HttpCode(HttpStatus.OK)
    findPositionsByInstitutionAndPositionType(
        @Param('announcement_id', ParseIntPipe) announcement_id: number,
        @Param('institution_id', ParseIntPipe) institution_id: number,
        @Param('position_type_id', ParseIntPipe) position_type_id: number
    ) {
    // Accede a los valores de announcement_id y institution_id  y position_type_id aquí
    return this.announcementService.findPositionsByInstitutionAndPositionType(announcement_id,institution_id,position_type_id);
    }
}