import { Controller, Get, HttpCode, HttpStatus, UseGuards, Request, ParseIntPipe, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { TestGroupQuestionService } from 'src/services/test_group_question/test_group_question.service';
import { CreateTestGroupQuestionDto } from './create-test-group-question.dto';
import { UpdateTestGroupQuestionDto } from './update-test-group-question.dto';

@ApiTags('Examen - Preguntas de grupos')
@Controller('test-group-question')
export class TestGroupQuestionController {
    constructor(private testGroupQuestionService:TestGroupQuestionService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'obtener todas los preguntas del y grupos' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.testGroupQuestionService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un  preguntas del grupo' })
    @HttpCode(HttpStatus.OK)
    findTestGroupQuestionById(@Param('id',ParseIntPipe) id:number){
        return this.testGroupQuestionService.findById(id)
    }

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear preguntas del grupo' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateTestGroupQuestionDto){
        createData.created_by = req.user.userId
        let response = await this.testGroupQuestionService.create(createData)
        return response
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar preguntas del grupo' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateTestGroupQuestionDto>,@Request() req) {
        updateData.updated_by = req.user.userId
        return this.testGroupQuestionService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar preguntas del grupo' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.testGroupQuestionService.deleteById(id);
    }

    @UseGuards(AuthGuard)
    @Post('removeAll')
    @ApiOperation({ summary: 'Eliminar preguntas del grupo' })
    @HttpCode(HttpStatus.OK)
    async deleteByAllId(
        @Query('test_group_id', ParseIntPipe) test_group_id: number,
        @Body() removeTestGroupQuestions: Partial<any>,@Request() req
    ) {
        // if(removeTestGroupQuestions)
        //     return true

        return this.testGroupQuestionService.deleteAll(test_group_id,removeTestGroupQuestions.testGroupQuestions,req);
    }

    @UseGuards(AuthGuard)
    @Post('addAll')
    @ApiOperation({ summary: 'adicionar preguntas del grupo' })
    @HttpCode(HttpStatus.OK)
    async addByAllId(
        @Query('test_group_id', ParseIntPipe) test_group_id: number,
        @Body() removeTestGroupQuestions: Partial<any>,@Request() req
    ) {
        // if(removeTestGroupQuestions)
        //     return true

        return this.testGroupQuestionService.addAll(test_group_id,removeTestGroupQuestions.testGroupQuestions,req);
    }

}
