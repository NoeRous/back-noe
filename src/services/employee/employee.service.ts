import { Inject, Injectable } from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { CreateEmployeeDto } from 'src/controllers/employee/create-employee.dto';
import { Employee } from 'src/modules/employee/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
    ){}


    async create(employee: CreateEmployeeDto): Promise<CreateEmployeeDto> {
        return this.employeeRepository.save(employee)
    }

    async findAll(): Promise<any[]> {
        const employees = await this.employeeRepository.find({ relations: ['person','employeeInstitution.institution','employeeInstitution.announcement'] });
        return employees.map((employee) => {
          const employeePlain = employee;
          const personPlain = classToPlain(employee.person);
          const employeeInstitutionPlain = employee.employeeInstitution;
         
          return { ...employeePlain, person: personPlain, employeeInstitution: employeeInstitutionPlain };
        });
      }
}
