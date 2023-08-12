import { Controller, Get, HttpCode, UseGuards,Request, HttpStatus, ParseIntPipe, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleMenuService } from 'src/services/role_menu/role_menu.service';
import { CreateRoleMenuDto } from './create-role-menu.dto';
import { updateRoleMenuDto } from './update-role-menu.dto';
@ApiTags('Role Menu')
@Controller('role-menu')
export class RoleMenuController {

    constructor(private roleMenuService:RoleMenuService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener el listado de Role Menu' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.roleMenuService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un Role Menu' })
    @HttpCode(HttpStatus.OK)
    findMenuById(@Param('id',ParseIntPipe) id:number){
        return this.roleMenuService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear Role Menu' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createData: CreateRoleMenuDto){
        let responseMenu = await this.roleMenuService.create(createData)
        return responseMenu
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar Role Menu' })
    @HttpCode(HttpStatus.OK)
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<updateRoleMenuDto>) {
        return this.roleMenuService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar Role Menu' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.roleMenuService.deleteById(id);
    }

}
