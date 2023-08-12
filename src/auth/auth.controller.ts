import { Body, ClassSerializerInterceptor, Controller, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autenticacion')
@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
    constructor( private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    sigIn(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.username, signInDto.password)
    }
}
