import { Test, TestingModule } from '@nestjs/testing';
import { CommissionInternalController } from './commission_internal.controller';

describe('CommissionInternalController', () => {
  let controller: CommissionInternalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionInternalController],
    }).compile();

    controller = module.get<CommissionInternalController>(CommissionInternalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
