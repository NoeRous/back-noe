import { Module } from '@nestjs/common';
import { EmployeeController } from 'src/controllers/employee/employee.controller';
import { DatabaseModule } from 'src/database/database.module';
import { employeeProviders } from 'src/services/employee/employee.providers';
import { EmployeeService } from 'src/services/employee/employee.service';

@Module({
    imports: [DatabaseModule],
    controllers: [EmployeeController],
    providers: [
        ...employeeProviders,
        EmployeeService,
    ]
})
export class EmployeeModule {}
