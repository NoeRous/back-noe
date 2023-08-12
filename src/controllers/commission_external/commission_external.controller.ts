import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards,Request, UnprocessableEntityException, Get, Param, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommissionExternalService } from 'src/services/commission_external/commission_external.service';
import { CreateCommissionExternalDto } from './create-commission-external.dto';
import { CreateRepresentativeDto } from '../representative/create-representative.dto';
import { RepresentativeService } from 'src/services/representative/representative.service';
import { Representative } from 'src/modules/representative/representative.entity';
import { CommissionService } from 'src/services/commission/commission.service';
import { Commission } from 'src/modules/commission/commission.entity';
import { CreateCommissionExternalSaveDto } from './create-commission-external-save.dto';
import { UpdateCommissionExternalDto } from './update-commission-external.dto';
@ApiTags('Comision Externa')
@Controller('commission-external')
export class CommissionExternalController {
    constructor(private commissionExternalService:CommissionExternalService,
        private representativeService:RepresentativeService,
        private commissionService:CommissionService){}


    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear representante externo de comision' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateCommissionExternalDto){ 
        try {
            const representativeNew = new CreateRepresentativeDto();
            representativeNew.firts_name = createData.firts_name;
            representativeNew.second_name = createData.second_name;
            representativeNew.last_name = createData.last_name;
            representativeNew.mothers_last_name = createData.mothers_last_name;
            representativeNew.husband_last_name = createData.husband_last_name;
            representativeNew.identity_card = createData.identity_card;
            representativeNew.identity_card_complement = createData.identity_card_complement;
            representativeNew.personal_number = createData.personal_number;
            representativeNew.created_by = req.user.userId;
            //representativeNew.updated_by = req.user.userId;
    
            const representative:Representative = await this.representativeService.create(representativeNew);
    
            //crear comision
            const commission:Commission = await this.commissionService.findById(createData.commission_id)
    
            //crear commision externa 
            const commissionExternalNew = new CreateCommissionExternalSaveDto();
            commissionExternalNew.commission = commission;
            commissionExternalNew.representative = representative;
            commissionExternalNew.name_role = createData.name_role;
            commissionExternalNew.name_institution = createData.name_institution;
            commissionExternalNew.created_by = req.user.userId;
            //commissionExternalNew.updated_by = req.user.userId;
    
            return this.commissionExternalService.create(commissionExternalNew)
        } catch (error) {
            throw new UnprocessableEntityException(error.message);   
        }     
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una commision externo' })
    @HttpCode(HttpStatus.OK)
    findCommissionExternalById(@Param('id',ParseIntPipe) id:number){
        return this.commissionExternalService.findById(id)
    } 


    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar commision externo' })
    @HttpCode(HttpStatus.OK)
    async updateommissionExternalById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateCommissionExternalDto>,@Request() req) {
        try{
            const commisionExternal = await this.commissionExternalService.findById(id);
            updateData.representative.updated_by = req.user.userId;
            const representative = await this.representativeService.updateById(commisionExternal.representative.id,updateData.representative)
            updateData.updated_by = req.user.userId;
            return await this.commissionExternalService.updateById(id, updateData);
        }catch (error) {
            throw new UnprocessableEntityException(error.message);   
        } 
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar commision externo' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        try{
            const commisionExternal = await this.commissionExternalService.findById(id);
            this.commissionExternalService.deleteById(id);
            return await this.representativeService.deleteById(commisionExternal.representative.id)
        }catch (error) {
            throw new UnprocessableEntityException(error.message);   
        }         
    }
}
