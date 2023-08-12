import { Body, Controller, HttpCode, HttpStatus, Post, UnprocessableEntityException, UseGuards, Request, Get, Param, ParseIntPipe, Query, DefaultValuePipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeInstitutionService } from 'src/services/employee_institution/employee_institution.service';
import { CreateEmployeeInstitutionDto } from './create-employee-institution.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Empledos asiganados a instituciones')
@Controller('employee-institution')
export class EmployeeInstitutionController {

    constructor(
        private readonly _employeeInstitutionService: EmployeeInstitutionService,
    ){}

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Registro de asignación de empleados a instituciones por convocatoria' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createAplicant(@Body() data: CreateEmployeeInstitutionDto,@Request() req){
        try {
            let response = await this._employeeInstitutionService.create(data,req.user);
            return response
        } catch (error) {
            throw new UnprocessableEntityException(error.message);   
        }        
    }

    @UseGuards(AuthGuard)
    @Get('announcement/:announcementId')
    @ApiOperation({ summary: 'obtener las instituciones del empleado por convocatoria' })
    @HttpCode(HttpStatus.OK)
    async findInstitutionsByAnnouncement(
        @Param('announcementId', ParseIntPipe) announcementId: number,
        @Request() req
    ){
        try {
            return await this._employeeInstitutionService.findInstitutionsByAnnouncement(req.user,announcementId)
        } catch (error) {
            throw new UnprocessableEntityException(error.message);   
        }  
        
    }



}
