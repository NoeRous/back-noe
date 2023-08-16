import { Controller, Get, HttpCode, HttpStatus, UseGuards,Request, Param, ParseIntPipe, Post, Body, Patch, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { TestGroupService } from 'src/services/test_group/test_group.service';
import { CreateTestGroupDto } from './create-test-group.dto';
import { UpdateTestGroupDto } from './update-test-group.dto';
@ApiTags('Examen - grupos del examen')
@Controller('test-group')
export class TestGroupController {
    constructor(private testGroupService:TestGroupService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todos los grupos de los examenes' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.testGroupService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un grupo del examen' })
    @HttpCode(HttpStatus.OK)
    findTestGroupById(@Param('id',ParseIntPipe) id:number){
        return this.testGroupService.findById(id)
    }
    @UseGuards(AuthGuard)
    @Get('/test/:testId')
    @ApiOperation({ summary: 'Obtener los grupos de un examen' })
    @HttpCode(HttpStatus.OK)
    findTestGroupByAnnouncementId(@Param('testId',ParseIntPipe) testId:number){
        return this.testGroupService.findByTestId(testId)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear grupo del examen' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateTestGroupDto){
        createData.created_by = req.user.userId
        let response = await this.testGroupService.create(createData)
        return response
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar grupo del examen' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateTestGroupById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateTestGroupDto>,@Request() req) {
        updateData.updated_by = req.user.userId
        return this.testGroupService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar grupo del examen' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.testGroupService.deleteById(id);
    }


}
