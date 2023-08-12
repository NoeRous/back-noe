import { Test, TestingModule } from '@nestjs/testing';
import { PostulationPhaseController } from './postulation_phase.controller';

describe('PostulationPhaseController', () => {
  let controller: PostulationPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationPhaseController],
    }).compile();

    controller = module.get<PostulationPhaseController>(PostulationPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
