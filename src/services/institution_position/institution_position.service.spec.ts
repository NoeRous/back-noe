import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionPositionService } from './institution_position.service';

describe('InstitutionPositionService', () => {
  let service: InstitutionPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionPositionService],
    }).compile();

    service = module.get<InstitutionPositionService>(InstitutionPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
