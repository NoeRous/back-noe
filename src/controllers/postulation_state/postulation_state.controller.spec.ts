import { Test, TestingModule } from '@nestjs/testing';
import { PostulationStateController } from './postulation_state.controller';

describe('PostulationStateController', () => {
  let controller: PostulationStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationStateController],
    }).compile();

    controller = module.get<PostulationStateController>(PostulationStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
