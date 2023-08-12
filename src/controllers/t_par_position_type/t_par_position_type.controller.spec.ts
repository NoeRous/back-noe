import { Test, TestingModule } from '@nestjs/testing';
import { TParPositionTypeController } from './t_par_position_type.controller';

describe('TParPositionTypeController', () => {
  let controller: TParPositionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TParPositionTypeController],
    }).compile();

    controller = module.get<TParPositionTypeController>(TParPositionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
