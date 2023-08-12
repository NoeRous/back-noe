import { Test, TestingModule } from '@nestjs/testing';
import { CommissionAssignedController } from './commission_assigned.controller';

describe('CommissionAssignedController', () => {
  let controller: CommissionAssignedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommissionAssignedController],
    }).compile();

    controller = module.get<CommissionAssignedController>(CommissionAssignedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
