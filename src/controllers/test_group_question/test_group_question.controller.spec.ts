import { Test, TestingModule } from '@nestjs/testing';
import { TestGroupQuestionController } from './test_group_question.controller';

describe('TestGroupQuestionController', () => {
  let controller: TestGroupQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestGroupQuestionController],
    }).compile();

    controller = module.get<TestGroupQuestionController>(TestGroupQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
