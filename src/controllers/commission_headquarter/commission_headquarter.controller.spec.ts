import { Test, TestingModule } from '@nestjs/testing';
import { CommissionHeadquarterController } from './commission_headquarter.controller';

describe('CommissionHeadquarterController', () => {
  let controller: CommissionHeadquarterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionHeadquarterController],
    }).compile();

    controller = module.get<CommissionHeadquarterController>(CommissionHeadquarterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
