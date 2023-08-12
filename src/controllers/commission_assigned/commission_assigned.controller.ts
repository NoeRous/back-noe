import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, UseGuards,Request, Body, UnprocessableEntityException } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommissionAssignedService } from 'src/services/commission_assigned/commission_assigned.service';
import { UpdateCommissionAssignedDto } from './update-commission-assigned.dto';

@Controller('commission-assigned')
export class CommissionAssignedController {

    constructor(private commissionAssignedService:CommissionAssignedService){}

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
    async updateommissionAssignedById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateCommissionAssignedDto>,@Request() req) {
    try{
             updateData.updated_by = req.user.userId;
             return await this.commissionAssignedService.updateById(id,updateData)
         }catch (error) {
             throw new UnprocessableEntityException(error.message);   
         } 
     }
}
