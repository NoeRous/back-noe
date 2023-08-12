import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeInstitutionService } from './employee_institution.service';

describe('EmployeeInstitutionService', () => {
  let service: EmployeeInstitutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeInstitutionService],
    }).compile();

    service = module.get<EmployeeInstitutionService>(EmployeeInstitutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
