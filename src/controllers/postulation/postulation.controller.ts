import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post,UseGuards, Request, Query, DefaultValuePipe, ParseBoolPipe, NotFoundException  } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { CreatePostulationDto } from './create-postulation.dto';
import { PostulationService } from 'src/services/postulation/postulation.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { PhaseService } from 'src/services/phase/phase.service';
import { AnnouncementInstitutionPositionService } from 'src/services/announcement_institution_position/announcement_institution_position.service';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';

@ApiTags('Postulacion')
@Controller('postulation')
export class PostulationController {

    constructor(private readonly _postulationService: PostulationService,
        private phaseService: PhaseService,
        private announcementInstitutionPositionService : AnnouncementInstitutionPositionService,
        private commissionAssignedService: CommissionAssignedService
    ){}
    
    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Todas las postulaciones del aplicante'})
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this._postulationService.findAll(req.user);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una postulación' })
    @HttpCode(HttpStatus.OK)
    findPostulationById(@Param('id',ParseIntPipe) id:number){
        return this._postulationService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear postulación' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() postulationData: CreatePostulationDto){
        let responsePostulation = await this._postulationService.create(postulationData,req.user)
        return responsePostulation
    }


    @UseGuards(AuthGuard)
    @Get('/inbox/:announcementId')
    @ApiOperation({ summary: 'Listado de bandejas'})
    @HttpCode(HttpStatus.OK)
    async inbox(@Request() req,
        @Param('announcementId', ParseIntPipe) announcementId: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('institutionId', new DefaultValuePipe(0), ParseIntPipe) institutionId: number,
        @Query('positionId', new DefaultValuePipe(0), ParseIntPipe) positionId: number, 
    ){
        let idsArray = [];
        const phaseCurrent = await this.phaseService.findPhaseByAnnouncementCurrent(announcementId);

        if(phaseCurrent.length > 1)
            throw new NotFoundException('Existe mas de una fase activa, favor de comunicarse con su encargado!');
        if(phaseCurrent.length == 0)
            throw new NotFoundException('No existe fase activa a la fecha!');
        
        if(institutionId > 0 &&  positionId > 0 ){
            const announcementInstitutionPosition = await this.announcementInstitutionPositionService.findAnnouncementInstitutionPosition(announcementId,institutionId,positionId);
            idsArray = announcementInstitutionPosition.map(announcementInstitutionPosition => announcementInstitutionPosition.id);
        }else if(institutionId > 0){
            const announcementInstitutionPosition = await this.commissionAssignedService.commissionAssinedByPhase(req.user,phaseCurrent[0])
            const filteredinstituttions = announcementInstitutionPosition.filter(announcementInstitutionPosition => announcementInstitutionPosition.announcementInstitutionPosition.institutionPosition.institution.id === institutionId);
            idsArray = filteredinstituttions.map(filteredinstituttions => filteredinstituttions.announcementInstitutionPosition.id);

        }else{

           const announcementInstitutionPosition = await this.commissionAssignedService.commissionAssignedInstitutionPositions(req.user,phaseCurrent[0])
           idsArray = announcementInstitutionPosition.map(announcementInstitutionPosition => announcementInstitutionPosition.id);
        }
        
        return await this._postulationService.inbox(idsArray,phaseCurrent[0].id);
    }

    @UseGuards(AuthGuard)
    @Get('tracking/:announcementId')
    @ApiOperation({ summary: 'Seguimiento de postulaciones'})
    @HttpCode(HttpStatus.OK)
    async trancking(@Request() req,
        @Param('announcementId', ParseIntPipe) announcementId: number,
        @Query('isValid', new DefaultValuePipe(false), ParseBoolPipe) isValid: boolean,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    ){
        return this._postulationService.tracking(req.user, isValid, page, limit,announcementId);
    }

    @UseGuards(AuthGuard)
    @Post('valid')
    @ApiOperation({ summary: 'validar postulacion o desvalidar' })
    @HttpCode(HttpStatus.OK)
    async validOrInvalid(
        @Body() postulations: Partial<any>,@Request() req
    ) {
        // if(removeTestGroupQuestions)
        //     return true

        return this._postulationService.updateIsvalid(postulations.isValid,postulations.postulations,req);
    }

    @UseGuards(AuthGuard)
    @Post('derived')
    @ApiOperation({ summary: 'validar postulacion o desvalidar' })
    @HttpCode(HttpStatus.OK)
    async derived(
        @Body() postulations: Partial<any>,@Request() req
    ) {
        return this._postulationService.derived(postulations.announcement_id,postulations.next_phase_id,postulations.postulation_id,req.user);
    }

    @UseGuards(AuthGuard)
    @Get('verify/:postulationId/:phaseId')
    @ApiOperation({ summary: 'verificar si puede ingresar a la postulación'})
    @HttpCode(HttpStatus.OK)
    async verifyPhase(@Request() req,
        @Param('postulationId', ParseIntPipe) postulationId: number,
        @Param('phaseId', ParseIntPipe) phaseId: number,
    ){
        return this._postulationService.verifyPhase(req.user, postulationId,phaseId);

    }

   
}
