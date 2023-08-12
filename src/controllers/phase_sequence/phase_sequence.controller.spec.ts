import { Test, TestingModule } from '@nestjs/testing';
import { PhaseSequenceController } from './phase_sequence.controller';

describe('PhaseSequenceController', () => {
  let controller: PhaseSequenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhaseSequenceController],
    }).compile();

    controller = module.get<PhaseSequenceController>(PhaseSequenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
