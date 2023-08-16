import { Controller, Get, HttpCode, HttpStatus, UseGuards,Request, ParseIntPipe, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';
import { CreateQuestionCategoryDto } from './create-question-category.dto';
import { UpdateQuestionCategoryDto } from './update-question-category.dto';

@ApiTags("Biblioteca - Categorias de preguntas")
@Controller('question-category')
export class QuestionCategoryController {

    constructor(private questionCategoryService:QuestionCategoryService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todas las categorias de las preguntas' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.questionCategoryService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una categoria de pregunta' })
    @HttpCode(HttpStatus.OK)
    findQuestionCategoryById(@Param('id',ParseIntPipe) id:number){
        return this.questionCategoryService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear categoria de pregunta' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() questionCategoryData: CreateQuestionCategoryDto){
        let responseQuestionCategory = await this.questionCategoryService.create(questionCategoryData)
        return responseQuestionCategory
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar categoria de pregunta' })
    @HttpCode(HttpStatus.OK)
    async updateQuestionCategoryById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateQuestionCategoryDto>) {
        return this.questionCategoryService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar categoria de pregunta' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.questionCategoryService.deleteById(id);
    }
}
