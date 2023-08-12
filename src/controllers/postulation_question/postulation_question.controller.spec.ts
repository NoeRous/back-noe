import { Test, TestingModule } from '@nestjs/testing';
import { PostulationQuestionController } from './postulation_question.controller';

describe('PostulationQuestionController', () => {
  let controller: PostulationQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationQuestionController],
    }).compile();

    controller = module.get<PostulationQuestionController>(PostulationQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
