import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, UseGuards,Request, Body, UnprocessableEntityException, NotFoundException } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';
import { UpdateCommissionAssignedDto } from './update-commission-assigned.dto';
import { PhaseService } from 'src/services/phase/phase.service';

@Controller('commission-assigned')
export class CommissionAssignedController {

    constructor(private readonly commissionAssignedService:CommissionAssignedService,
                private phaseService: PhaseService
        ){}

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una commision asignada' })
    @HttpCode(HttpStatus.OK)
    findCommissionAssignedById(@Param('id',ParseIntPipe) id:number){
        return this.commissionAssignedService.findById(id)
    } 


    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar commision asignada' })
    @HttpCode(HttpStatus.OK)
    async updateommissionAssignedById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateCommissionAssignedDto>, @Request() req) {
        try {
            updateData.updated_by = req.user.userId;
            return await this.commissionAssignedService.updateById(id, updateData)
        } catch (error) {
            throw new UnprocessableEntityException(error.message);
        }
    }

    @UseGuards(AuthGuard)
    @Get('institutions/:announcementId')
    @ApiOperation({ summary: 'Obtener las instituciones asiganadas de la fase actual' })
    @HttpCode(HttpStatus.OK)
    async commissionAssignedInstitutions(@Param('announcementId', ParseIntPipe) announcementId: number,@Request() req) {
        try{
            const phaseCurrent = await this.phaseService.findPhaseByAnnouncementCurrent(announcementId);

            if(phaseCurrent.length > 1)
                throw new NotFoundException('Existe mas de una fase activa, favor de comunicarse con su encargado!');
            if(phaseCurrent.length == 0)
                throw new NotFoundException('No existe fase activa a la fecha!');

            return await this.commissionAssignedService.commissionAssignedsInstitutions(req.user, phaseCurrent[0])
        }catch (error) {
            throw new UnprocessableEntityException(error.message);   
        } 
     }
    
     @UseGuards(AuthGuard)
     @Get('institutions/:announcementId/:institutionId')
     @ApiOperation({ summary: 'Obtener las instituciones asiganadas de la fase actual' })
     @HttpCode(HttpStatus.OK)
     async commissionAssignedPositions(@Param('announcementId', ParseIntPipe) announcementId: number,
         @Param('institutionId', ParseIntPipe) institutionId: number,
         @Request() req) {
         try {
             const phaseCurrent = await this.phaseService.findPhaseByAnnouncementCurrent(announcementId);
 
             if(phaseCurrent.length > 1)
                 throw new NotFoundException('Existe mas de una fase activa, favor de comunicarse con su encargado!');
             if(phaseCurrent.length == 0)
                 throw new NotFoundException('No existe fase activa a la fecha!');
 
             return await this.commissionAssignedService.commissionAssignedPositions(req.user, phaseCurrent[0],institutionId)
         }catch (error) {
             throw new UnprocessableEntityException(error.message);   
         } 
      }
}
