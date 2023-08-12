import { Controller, Get,Post,Request, HttpCode, HttpStatus,Body, NotFoundException,UseGuards, UseInterceptors, ClassSerializerInterceptor, UnprocessableEntityException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PersonService } from 'src/services/person/person.service';
import { CreatePersonDto } from './create-person.dto';
import { UserService } from 'src/user/user.service';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { CreateApplicantDto } from '../applicant/create-applicant.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserRole } from 'src/modules/user_role/user_role.entity';
import { UserRoleService } from 'src/services/user_role/user_role.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateEmployeeDto } from '../employee/create-employee.dto';
import { EmployeeService } from 'src/services/employee/employee.service';
import { CreateUserRolDto } from '../user_role/create-user_role.dto';
import { TParGenderService } from 'src/services/t_par_gender/t_par_gender.service';

@ApiTags('Registro')
@Controller('person')
@UseInterceptors(ClassSerializerInterceptor)
export class PersonController {
    constructor(
        private readonly _personService: PersonService,
        private userService:UserService, 
        private authService:AuthService,
        private applicantService:ApplicantService,
        private userRoleService:UserRoleService,
        private employeeService:EmployeeService,
        private tParGenderService:TParGenderService
        ){}
    
    @UseGuards(AuthGuard)
    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll( ){
        return this._personService.findAll();
    }

    @Post('applicant')
    @ApiOperation({ summary: 'Registro de postulante' })
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async createAplicant(@Body() personData: CreatePersonDto){
        
        try {
            personData.tParGender = await this.tParGenderService.findById(personData.t_part_gender_id);
            let responsePerson = await this._personService.create(personData)
            const username = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();
            const password = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();
            let responseUser = await this.authService.create(username, password,responsePerson)
            let createApplicantDto : CreateApplicantDto = {
                person:  responsePerson,
                rda_number:  personData.rda_number? personData.rda_number:null
            };
            
            let responseApplicant = await this.applicantService.create(createApplicantDto);
            let userRole =  await this.userRoleService.createRolApplicant(responseUser);
            return responseApplicant
        } catch (error) {

            throw new UnprocessableEntityException(error.message);   
        }        
    }

    @Post('employee')
    @HttpCode(HttpStatus.CREATED)
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
 
    async createEmployee(@Body() personData: CreatePersonDto){
        try {
            personData.tParGender = await this.tParGenderService.findById(personData.t_part_gender_id);
            let responsePerson = await this._personService.create(personData)
            const username = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();
            const password = personData.identity_card_complement
            ? personData.identity_card + '-' + personData.identity_card_complement
            : personData.identity_card.toString();
            let responseUser = await this.authService.create(username, password,responsePerson)
            let createEmployeeDto : CreateEmployeeDto = {
                person:  responsePerson,
                position:  personData.position,
                created_by:1//ojo
            };
            
            let responseEmployee = await this.employeeService.create(createEmployeeDto);

            let createUserRoleDto : CreateUserRolDto = {
                userId:  responseUser.id,
                roleId:  personData.role_id
            };
            console.log('createUserRoleDto: ',createUserRoleDto)
            console.log('fdsfsdfsdf: ')
            let responseUserRole = await this.userRoleService.create(createUserRoleDto);
            return responseEmployee
        } catch (error) {
            throw new UnprocessableEntityException(error.message);  
        }finally {
   
        }        
    }

    
    @Get('profile')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async findProfile(@Request() request ){
        const USER_ID = request.user.userId;
        const USER = await this.userService.findOneId(USER_ID);
        var person= await this._personService.findPersonById(USER.person.id);
        return {person,username:USER.username }
    }

}
