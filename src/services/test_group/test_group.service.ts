import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestGroupDto } from 'src/controllers/test_group/create-test-group.dto';
import { UpdateTestGroupDto } from 'src/controllers/test_group/update-test-group.dto';
import { Test } from 'src/modules/test/test.entity';
import { TestGroup } from 'src/modules/test_group/test_group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestGroupService {

    constructor(
        @Inject('TEST_GROUP_REPOSITORY')
        private testGroupRepository: Repository<TestGroup>,
        @Inject('TEST_REPOSITORY')
        private testRepository: Repository<Test>,
      
    ){}

    async findAll(): Promise<TestGroup[]>{
        return this.testGroupRepository.find({ relations:{test:true},order:{created_at:'DESC'}});
    }

    findById(id:number): Promise<TestGroup>{
        return this.testGroupRepository.findOne({relations:['test','test_group_question.question.question_category'],where: {id:id}});
    }

    findByTestId(testId:number): Promise<TestGroup[]>{
        return this.testGroupRepository.find({relations:['test_group_question.question'],where:{test:{id:testId}}});
    }

    async create(testGroup: CreateTestGroupDto): Promise<TestGroup> {
        const test = await this.testRepository.findOneBy({id:testGroup.test_id});
        if (!test) {
            throw new NotFoundException('test no encontrado');
        }

        const testGroupNew = new TestGroup();
        testGroupNew.name = testGroup.name
        testGroupNew.description = testGroup.description
        testGroupNew.num_questions = testGroup.num_questions
        testGroupNew.points_per_question = testGroup.points_per_question
        testGroupNew.sequence = testGroup.sequence
        testGroupNew.test = test,
        testGroupNew.created_by = testGroup.created_by
        return this.testGroupRepository.save(testGroupNew)
    }

    async updateById(id: number, updateData: Partial<UpdateTestGroupDto>): Promise<TestGroup> {
        const testGroup = await this.testGroupRepository.findOneBy({id:id});
        if (!testGroup) {
            throw new NotFoundException('testGroup not found');
        }
        const updatedTestGroup = Object.assign(testGroup, updateData);
        return this.testGroupRepository.save(updatedTestGroup);
    }

    async deleteById(id: number): Promise<void> {
        const testGroup = await this.testGroupRepository.findOneBy({id:id});
        if (!testGroup) {
          throw new NotFoundException('testGroup not found!');
        }
        await this.testGroupRepository.delete(id);
    }
}
