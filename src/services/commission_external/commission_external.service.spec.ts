import { Test, TestingModule } from '@nestjs/testing';
import { CommissionExternalService } from './commission_external.service';

describe('CommissionExternalService', () => {
  let service: CommissionExternalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionExternalService],
    }).compile();

    service = module.get<CommissionExternalService>(CommissionExternalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
