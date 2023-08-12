import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeInstitutionController } from './employee_institution.controller';

describe('EmployeeInstitutionController', () => {
  let controller: EmployeeInstitutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeInstitutionController],
    }).compile();

    controller = module.get<EmployeeInstitutionController>(EmployeeInstitutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
