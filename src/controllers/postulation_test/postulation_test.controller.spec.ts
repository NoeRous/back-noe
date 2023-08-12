import { Test, TestingModule } from '@nestjs/testing';
import { PostulationTestController } from './postulation_test.controller';

describe('PostulationTestController', () => {
  let controller: PostulationTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationTestController],
    }).compile();

    controller = module.get<PostulationTestController>(PostulationTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
