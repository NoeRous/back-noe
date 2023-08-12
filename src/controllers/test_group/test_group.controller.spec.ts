import { Test, TestingModule } from '@nestjs/testing';
import { TestGroupController } from './test_group.controller';

describe('TestGroupController', () => {
  let controller: TestGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestGroupController],
    }).compile();

    controller = module.get<TestGroupController>(TestGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
