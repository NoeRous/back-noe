import { Test, TestingModule } from '@nestjs/testing';
import { TestGroupService } from './test_group.service';

describe('TestGroupService', () => {
  let service: TestGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGroupService],
    }).compile();

    service = module.get<TestGroupService>(TestGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
