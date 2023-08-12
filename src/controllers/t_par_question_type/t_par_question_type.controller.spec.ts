import { Test, TestingModule } from '@nestjs/testing';
import { TParQuestionTypeController } from './t_par_question_type.controller';

describe('TParQuestionTypeController', () => {
  let controller: TParQuestionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TParQuestionTypeController],
    }).compile();

    controller = module.get<TParQuestionTypeController>(TParQuestionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
