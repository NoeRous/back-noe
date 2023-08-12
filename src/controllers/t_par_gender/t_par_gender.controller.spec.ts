import { Test, TestingModule } from '@nestjs/testing';
import { TParGenderController } from './t_par_gender.controller';

describe('TParGenderController', () => {
  let controller: TParGenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TParGenderController],
    }).compile();

    controller = module.get<TParGenderController>(TParGenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
