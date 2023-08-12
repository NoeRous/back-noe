import { Test, TestingModule } from '@nestjs/testing';
import { CommissionAssignedService } from './commission_assigned.service';

describe('CommissionAssignedService', () => {
  let service: CommissionAssignedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionAssignedService],
    }).compile();

    service = module.get<CommissionAssignedService>(CommissionAssignedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
