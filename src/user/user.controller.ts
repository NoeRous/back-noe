import { Body, Controller, Get, HttpCode, HttpStatus, ParseIntPipe, Patch, UseGuards,Request, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { UpdateUserDto } from './update-user.dto';

@ApiTags('Usuarios')
@Controller('user')
export class UserController {

    constructor(private readonly _userService: UserService){

    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll(){
        return  this._userService.findAll();
    }

  
    @Get('lista')
    async lista(){
        return this._userService.findAll();
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar password' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateUserDto>,@Request() req) {
        return this._userService.updateById(id, updateData);
    }
}
