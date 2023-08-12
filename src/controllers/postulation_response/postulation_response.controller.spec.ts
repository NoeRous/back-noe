import { Test, TestingModule } from '@nestjs/testing';
import { PostulationResponseController } from './postulation_response.controller';

describe('PostulationResponseController', () => {
  let controller: PostulationResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulationResponseController],
    }).compile();

    controller = module.get<PostulationResponseController>(PostulationResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
