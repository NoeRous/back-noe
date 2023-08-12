import { Test, TestingModule } from '@nestjs/testing';
import { CommissionExternalController } from './commission_external.controller';

describe('CommissionExternalController', () => {
  let controller: CommissionExternalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionExternalController],
    }).compile();

    controller = module.get<CommissionExternalController>(CommissionExternalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
