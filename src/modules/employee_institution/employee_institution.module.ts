import { Module } from '@nestjs/common';
import { EmployeeInstitutionController } from 'src/controllers/employee_institution/employee_institution.controller';
import { DatabaseModule } from 'src/database/database.module';
import { employeeProviders } from 'src/services/employee/employee.providers';
import { EmployeeService } from 'src/services/employee/employee.service';
import { employeeInstitutionProviders } from 'src/services/employee_institution/employee_institution.providers';
import { EmployeeInstitutionService } from 'src/services/employee_institution/employee_institution.service';
import { institutionProviders } from 'src/services/institution/institution.providers';
import { InstitutionService } from 'src/services/institution/institution.service';
import { personProviders } from 'src/services/person/person.providers';
import { PersonService } from 'src/services/person/person.service';
import { userProviders } from 'src/user/user.providers';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [DatabaseModule],
    controllers: [EmployeeInstitutionController],
    providers: [
        ...employeeInstitutionProviders,
        ...employeeProviders,
        ...institutionProviders,
        ...userProviders,
        ...personProviders,
        EmployeeInstitutionService,
        EmployeeService,
        InstitutionService,
        UserService,
        PersonService
    ]
})
export class EmployeeInstitutionModule {}
