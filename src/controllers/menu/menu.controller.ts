import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request, ParseIntPipe, Param, Post, Body, Patch, Delete, Query, DefaultValuePipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { MenuService } from 'src/services/menu/menu.service';
import { CreateMenuDto } from './create-menu.dto';
import { UpdateMenuDto } from './update-menu.dto';
@ApiTags('Menu')
@Controller('menu')
@UseInterceptors(ClassSerializerInterceptor)
export class MenuController {

    constructor(private menuService:MenuService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener el listado de Menus' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('roleId', new DefaultValuePipe(null)) roleId: number, @Query('menuId', new DefaultValuePipe(null)) menuId: number){
        return this.menuService.findAll(roleId, menuId)
    }

    @UseGuards(AuthGuard)
    @Get('all/menu')
    @ApiOperation({ summary: 'Obtener  Menus segun el rol' })
    @HttpCode(HttpStatus.OK)
    async findAllRole(@Request() req){
        const USER_ID = req.user.userId;
        const ROLE_ID = req.user.roleId;
        const ROLE = req.user.rol;    
        return this.menuService.findRoleAll(ROLE_ID)
    }


    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un Menu' })
    @HttpCode(HttpStatus.OK)
    findMenuById(@Param('id',ParseIntPipe) id:number){
        return this.menuService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear Menu' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createData: CreateMenuDto){
        let responseMenu = await this.menuService.create(createData)
        return responseMenu
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar Menu' })
    @HttpCode(HttpStatus.OK)
    async updateMenuById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateMenuDto>) {
        return this.menuService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar Menu' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.menuService.deleteById(id);
    }
}
