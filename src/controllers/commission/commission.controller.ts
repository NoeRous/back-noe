import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UseGuards, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CommissionService } from 'src/services/commission/commission.service';
import { CommissionInternalService } from 'src/services/commission_internal/commission_internal.service';
import { UserService } from 'src/user/user.service';

@ApiTags('Comision')
@Controller('commission')
export class CommissionController {
    constructor(private commissionService:CommissionService,
                private commissioninternalService:CommissionInternalService,
                private userService:UserService,
                ){}

    @UseGuards(AuthGuard)
    @Get('person')
    @ApiOperation({ summary: 'Obtener comisiones de la persona' })
    @HttpCode(HttpStatus.OK)
    async findCommissionByPerson(@Request() req){
        const user = await this.userService.findById(req.user.userId)
        return this.commissioninternalService.findCommissionByPerson(user.person.id);
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener comision y sus integrantes' })
    @HttpCode(HttpStatus.OK)
    findMembers(@Param('id',ParseIntPipe) id:number){
        return this.commissionService.findById(id);
    }

    @UseGuards(AuthGuard)
    @Get('assigned/:id')
    @ApiOperation({ summary: 'Obtener cargos asignados de una comision' })
    @HttpCode(HttpStatus.OK)
    async findCommissionAssignedByCommission(@Param('id',ParseIntPipe) id:number){
        return this.commissionService.findByIdAssigned(id);
    }
}
