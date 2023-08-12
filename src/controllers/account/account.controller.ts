import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
// import { Account } from 'src/modules/account/account.entity';
import { CreateAccountDto } from './create-account.dto';
import { AccountService } from 'src/services/account/account.service';


@ApiTags('Ejemplo')
@Controller('account')
export class AccountController {

    constructor(private readonly _accountService: AccountService){}

  
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._accountService.findAll();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() accountData: CreateAccountDto){
        let response = await this._accountService.create(accountData)
        return response
    }
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findAccountById(@Param('id',ParseIntPipe) id:number){
        return this._accountService.findAccountById(id)
    } 
}
