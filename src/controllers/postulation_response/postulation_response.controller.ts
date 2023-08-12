import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostulationResponseService } from 'src/services/postulation_response/postulation_response.service';
import { CreatePostulationResponseDto } from './create-postulation-response.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Examen')
@Controller('postulation-response')
export class PostulationResponseController {

    constructor(private postulationResponseService:PostulationResponseService){}

    @UseGuards(AuthGuard)
    @Post()
    @ApiOperation({ summary: 'Enviar respuestas de la postulación' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Request() req, @Body() createData: CreatePostulationResponseDto){ 
        let response = await this.postulationResponseService.sendPostulationResponses(createData,req)
        return response
    }
    
}
