import { EmployeeInstitution } from "src/modules/employee_institution/employee_institution.entity";
import { DataSource } from "typeorm";


export const employeeInstitutionProviders = [
    {
        provide: 'EMPLOYEE_INSTITUTION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(EmployeeInstitution),
        inject: ['DATA_SOURCE']
    }
]