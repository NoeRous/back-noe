import { Controller, Get, HttpCode, UseGuards,Request, HttpStatus, Param, Post, Body, Patch, ParseIntPipe, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuestionResponseService } from 'src/services/question_response/question_response.service';
import { CreateQuestionResponseDto } from './create-question-response.dto';
import { UpdateQuestionResponseDto } from './update-question-response.dto';
import { AuthGuard } from 'src/auth/auth.guard';
@ApiTags("Biblioteca - Respuestas de Preguntas")
@Controller('question-response')
export class QuestionResponseController {
    constructor(private questionResponseService:QuestionResponseService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todas las Respuestas de las preguntas' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.questionResponseService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una Respuesta de pregunta' })
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this.questionResponseService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear Respuesta de pregunta' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateQuestionResponseDto){
        createData.created_by = req.user.userId
        let response = await this.questionResponseService.create(createData)
        return response
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar Respuesta de pregunta' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateQuestionResponseDto>,@Request() req) {
        updateData.updated_by = req.user.userId
        return this.questionResponseService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar Respuesta de pregunta' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.questionResponseService.deleteById(id);
    }
}
