import { Employee } from "src/modules/employee/employee.entity";
import { DataSource } from "typeorm";


export const employeeProviders = [
    {
        provide: 'EMPLOYEE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Employee),
        inject: ['DATA_SOURCE']
    }
]