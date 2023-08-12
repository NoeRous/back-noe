import { Test, TestingModule } from '@nestjs/testing';
import { TestGroupQuestionService } from './test_group_question.service';

describe('TestGroupQuestionService', () => {
  let service: TestGroupQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGroupQuestionService],
    }).compile();

    service = module.get<TestGroupQuestionService>(TestGroupQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
