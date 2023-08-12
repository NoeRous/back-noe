import { Controller, Get, HttpCode, HttpStatus, UseGuards,Request, Param, ParseIntPipe, Post, Patch, Body, Delete, Query, DefaultValuePipe } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { QuestionService } from 'src/services/question/question.service';
import { CreateQuestionDto } from './create-question.dto';
import { UpdateQuestionDto } from './update-question.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Question } from 'src/modules/question/question.entity';
@ApiTags("Biblioteca - Preguntas")
@Controller('question')
export class QuestionController {

    constructor(private questionService:QuestionService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todas las preguntas' })
    @HttpCode(HttpStatus.OK)
    async getQuestions(@Query('categoryId', new DefaultValuePipe(null)) categoryId: number,@Request() req): Promise<Question[]> {
      return this.questionService.findByUser(categoryId,req.user);
      }


    @UseGuards(AuthGuard)
    @Get('paginate')
    @ApiOperation({ summary: 'Obtener todas las preguntas' })
    @HttpCode(HttpStatus.OK)
    async getPaginateQuestions(
        @Query('category_id', new DefaultValuePipe(0), ParseIntPipe) categoryId: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
      ): Promise<Pagination<Question>> {
        if (categoryId > 0) {
          return this.questionService.findByCategoryId(categoryId, page, limit);
        } else {
          return this.questionService.findAllPaginate(page, limit);
        }
    }


    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener una pregunta' })
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this.questionService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear pregunta' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateQuestionDto){
        createData.created_by = req.user.userId
        let response = await this.questionService.create(createData)
        return response
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar pregunta' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateQuestionDto>,@Request() req) {
        updateData.updated_by = req.user.userId
        return this.questionService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar pregunta' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.questionService.deleteById(id);
    }
}
