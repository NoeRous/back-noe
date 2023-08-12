import { Module } from '@nestjs/common';
import { PersonController } from 'src/controllers/person/person.controller';
import { DatabaseModule } from 'src/database/database.module';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';
import { UserModule } from 'src/user/user.module';
import { ApplicantModule } from '../aplicant/aplicant.module';
import { ApplicantService } from 'src/services/applicant/applicant.service';
import { ApplicantController } from 'src/controllers/applicant/applicant.controller';
import { applicantProviders } from 'src/services/applicant/applicant.providers';
import { AuthService } from 'src/auth/auth.service';
import { UserRoleService } from 'src/services/user_role/user_role.service';
import { userRoleProviders } from 'src/services/user_role/user_role.providers';
import { RoleService } from 'src/services/role/role.service';
import { roleProviders } from 'src/services/role/role.providers';
import { Employee } from '../employee/employee.entity';
import { EmployeeService } from 'src/services/employee/employee.service';
import { employeeProviders } from 'src/services/employee/employee.providers';
import { UserService } from 'src/user/user.service';
import { userProviders } from 'src/user/user.providers';
import { TParGenderService } from 'src/services/t_par_gender/t_par_gender.service';
import { tParGenderProviders } from 'src/services/t_par_gender/t_par_gender.providers';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [PersonController],
    providers: [
        ...personProviders,
        ...applicantProviders,
        ...userRoleProviders,
        ...roleProviders,
        ...employeeProviders,
        ...userProviders,
        ...tParGenderProviders,
        PersonService,
        ApplicantService,
        AuthService,
        UserRoleService,
        RoleService,
        EmployeeService,
        UserService,
        TParGenderService
    ]})
export class PersonModule {}
