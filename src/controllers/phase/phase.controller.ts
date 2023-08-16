import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { PhaseService } from 'src/services/phase/phase.service';

@Controller('phase')
export class PhaseController { 

    constructor(private phaseService:PhaseService){}

    @UseGuards(AuthGuard)
    @Get('next-phase/:announcementId')
    @ApiOperation({ summary: 'Obtener lass fases disponibles' })
    @HttpCode(HttpStatus.OK)
    async findNextPhase(
        @Param('announcementId', ParseIntPipe) announcementId: number,
        @Request() req){
        return this.phaseService.findNextPhase(announcementId)
    }

    @UseGuards(AuthGuard)
    @Get('announcement/:announcementId')
    @ApiOperation({ summary: 'Obtener las fases por convocatoria' })
    @HttpCode(HttpStatus.OK)
    async findAll(
        @Param('announcementId', ParseIntPipe) announcementId: number,
        @Request() req
    ){
        return this.phaseService.findPhaseByAnnouncement(req.user,announcementId)
    }

}
