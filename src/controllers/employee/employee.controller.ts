import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { EmployeeService } from 'src/services/employee/employee.service';

@ApiTags('Empleados')
@Controller('employee')
export class EmployeeController {

    constructor(
        private readonly _employeeService: EmployeeService,
    ){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todos los empleados' })
    @HttpCode(HttpStatus.OK)
    async findAll(){
        return this._employeeService.findAll();
    }
}
