import { Controller, Get, HttpCode, HttpStatus, UseGuards,Request, Param, ParseIntPipe, Post, Body, Patch, Delete, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { TestService } from 'src/services/test/test.service';
import { CreateTestDto } from './create-test.dto';
import { UpdateTestDto } from './update-test.dto';

@ApiTags('Examen')
@Controller('test')
@UseInterceptors(ClassSerializerInterceptor)
export class TestController {
    
    constructor(private testService:TestService){}

    @UseGuards(AuthGuard)
    @Get()
    @ApiOperation({ summary: 'Obtener todos los Examenes' })
    @HttpCode(HttpStatus.OK)
    async findAll(@Request() req){
        return this.testService.findAll()
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    @ApiOperation({ summary: 'Obtener un Examen' })
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this.testService.findById(id)
    } 

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Crear Examen' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreateTestDto){
        createData.created_by = req.user.userId
        let response = await this.testService.create(createData)
        return response
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    @ApiOperation({ summary: 'Actualizar Examen' })
    @HttpCode(HttpStatus.OK)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async updateAccountById(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<UpdateTestDto>,@Request() req) {
        updateData.updated_by = req.user.userId
        return this.testService.updateById(id, updateData);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar Examen' })
    @HttpCode(HttpStatus.OK)
    async deleteById(@Param('id', ParseIntPipe) id: number) {
        return this.testService.deleteById(id);
    }

    @UseGuards(AuthGuard)
    @Get('postulation/:postulationId')
    @ApiOperation({ summary: 'Obtener Examen de la postulación' })
    @HttpCode(HttpStatus.OK)
    findTestPositionId(
        @Param('postulationId', ParseIntPipe) postulationId: number,
        @Request() req
    ) {
    // Accede a los valores de announcement_id y institution_id  y position_type_id aquí
    return this.testService.findTestPostulation(postulationId,req);
    }
}
