import { Test, TestingModule } from '@nestjs/testing';
import { PostulationTestService } from './postulation_test.service';

describe('PostulationTestService', () => {
  let service: PostulationTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationTestService],
    }).compile();

    service = module.get<PostulationTestService>(PostulationTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
