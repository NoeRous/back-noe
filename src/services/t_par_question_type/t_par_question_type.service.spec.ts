import { Test, TestingModule } from '@nestjs/testing';
import { TParQuestionTypeService } from './t_par_question_type.service';

describe('TParQuestionTypeService', () => {
  let service: TParQuestionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TParQuestionTypeService],
    }).compile();

    service = module.get<TParQuestionTypeService>(TParQuestionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
