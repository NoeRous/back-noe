import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseService } from './postulation_phase.service';

describe('PostulationPhaseService', () => {
  let service: PostulationPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationPhaseService],
    }).compile();

    service = module.get<PostulationPhaseService>(PostulationPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
