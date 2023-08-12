import { Test, TestingModule } from '@nestjs/testing';
import { CommissionHeadquarterService } from './commission_headquarter.service';

describe('CommissionHeadquarterService', () => {
  let service: CommissionHeadquarterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommissionHeadquarterService],
    }).compile();

    service = module.get<CommissionHeadquarterService>(CommissionHeadquarterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
