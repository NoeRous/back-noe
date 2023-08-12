import { Test, TestingModule } from '@nestjs/testing';
import { PostulationStateService } from './postulation_state.service';

describe('PostulationStateService', () => {
  let service: PostulationStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationStateService],
    }).compile();

    service = module.get<PostulationStateService>(PostulationStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
