import { Test, TestingModule } from '@nestjs/testing';
import { PhaseSequenceService } from './phase_sequence.service';

describe('PhaseSequenceService', () => {
  let service: PhaseSequenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhaseSequenceService],
    }).compile();

    service = module.get<PhaseSequenceService>(PhaseSequenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
