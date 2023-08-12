import { Test, TestingModule } from '@nestjs/testing';
import { CommissionInternalService } from './commission_internal.service';

describe('CommissionInternalService', () => {
  let service: CommissionInternalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionInternalService],
    }).compile();

    service = module.get<CommissionInternalService>(CommissionInternalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
