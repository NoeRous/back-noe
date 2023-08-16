import { Controller, Get, HttpCode, HttpStatus, UseGuards,Request, Param, ParseIntPipe, Post, Patch, Body, Delete, Query, DefaultValuePipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserRoleService } from 'src/services/user_role/user_role.service';
import { CreateUserDto } from 'src/user/create-user.dto';
import { CreateUserRolDto } from './create-user_role.dto';
import { UpdateUserRolDto } from './update-user_role.dto';

@ApiTags('User Role')
@Controller('user-role')
export class UserRoleController {


    constructor(private userRoleService:UserRoleService){}

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear UserRole' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateUserRolDto){
       
        let response = await this.userRoleService.create(createData)
        return response
    }



    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar UserRole' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateUserRoleById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateUserRolDto>,@Request() req) {
        //updateData.updated_by = req.user.userId
        return this.userRoleService.updateById(id, updateData);
    }

}
