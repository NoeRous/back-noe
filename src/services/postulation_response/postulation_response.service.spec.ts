import { Test, TestingModule } from '@nestjs/testing';
import { PostulationResponseService } from './postulation_response.service';

describe('PostulationResponseService', () => {
  let service: PostulationResponseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationResponseService],
    }).compile();

    service = module.get<PostulationResponseService>(PostulationResponseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
