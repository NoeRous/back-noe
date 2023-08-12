import { Test, TestingModule } from '@nestjs/testing';
import { PostulationQuestionService } from './postulation_question.service';

describe('PostulationQuestionService', () => {
  let service: PostulationQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulationQuestionService],
    }).compile();

    service = module.get<PostulationQuestionService>(PostulationQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
