import { BadRequestException, Inject, Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateTestGroupQuestionDto } from 'src/controllers/test_group_question/create-test-group-question.dto';
import { UpdateTestGroupQuestionDto } from 'src/controllers/test_group_question/update-test-group-question.dto';
import { Question } from 'src/modules/question/question.entity';
import { TestGroup } from 'src/modules/test_group/test_group.entity';
import { TestGroupQuestion } from 'src/modules/test_group_question/test_group_question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestGroupQuestionService {

    constructor(
        @Inject('TEST_GROUP_QUESTION_REPOSITORY')
        private testGroupQuestionRepository: Repository<TestGroupQuestion>,
        @Inject('TEST_GROUP_REPOSITORY')
        private testGroupRepository: Repository<TestGroup>,
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<Question>,
      
    ){}

    async findAll(): Promise<TestGroupQuestion[]>{
        return this.testGroupQuestionRepository.find({ relations:{question:true,test_group:true},order:{created_at:'DESC'}});
    }

    findById(id:number): Promise<TestGroupQuestion>{
        return this.testGroupQuestionRepository.findOne({relations:{question:true,test_group:true},where: {id:id}});
    }

    async create(testGroupQuestion: CreateTestGroupQuestionDto): Promise<TestGroupQuestion> {
        const question = await this.questionRepository.findOneBy({id:testGroupQuestion.question_id});
        if (!question) {
            throw new NotFoundException('Question not found');
        }
        const testGroup = await this.testGroupRepository.findOneBy({id:testGroupQuestion.test_group_id});
        if (!testGroup) {
            throw new NotFoundException('Test Group not found');
        }


        const testGroupQuestionNew = new TestGroupQuestion();
        testGroupQuestionNew.question= question
        testGroupQuestionNew.test_group = testGroup

        testGroupQuestionNew.created_by = testGroupQuestion.created_by
        return this.testGroupQuestionRepository.save(testGroupQuestionNew)
    }

    async updateById(id: number, updateData: Partial<UpdateTestGroupQuestionDto>): Promise<TestGroupQuestion> {
        const testGroupQuestion = await this.testGroupQuestionRepository.findOneBy({id:id});
        if (!testGroupQuestion) {
            throw new NotFoundException('testGroup not found');
        }

        if(updateData.question_id){
            const question = await this.questionRepository.findOneBy({id:updateData.question_id});
            if (!question) {
                throw new NotFoundException('Question not found');
            }
            testGroupQuestion.question = question
        }

        if(updateData.test_group_id){
            const testGroup = await this.testGroupRepository.findOneBy({id:updateData.test_group_id});
            if (!testGroup) {
                throw new NotFoundException('Test Group not found');
            }
            testGroupQuestion.test_group = testGroup
        }
        return this.testGroupQuestionRepository.save(testGroupQuestion);
    }

    async deleteById(id: number): Promise<void> {
        const testGroupQuestion = await this.testGroupQuestionRepository.findOneBy({id:id});
        if (!testGroupQuestion) {
          throw new NotFoundException('test Group Question not found!');
        }
        await this.testGroupQuestionRepository.delete(id);
    }

    async deleteAll(test_group_id: number, removeTestGroupQuestions: any[],req:any): Promise<any> {

        try{
            for(let removeTestGroupQuestion of removeTestGroupQuestions ){
                const testGroupQuestion = await this.testGroupQuestionRepository.findOne({where:{test_group:{id:test_group_id},question:{id:removeTestGroupQuestion.id}}});
                await this.testGroupQuestionRepository.delete(testGroupQuestion.id);
            }
            return true;
        } catch(error){
            throw new NotFoundException('No es posible la accion de quitar pregunta por que ya exiten regisros relacionados.',error.message)
        }
    }



      async addAll(test_group_id: number, removeTestGroupQuestions: any[],req:any): Promise<any> {

        const testGroup = await this.testGroupRepository.findOneBy({id:test_group_id});
            if (!testGroup) {
                throw new NotFoundException('Test Group not found');
            }

        for(let removeTestGroupQuestion of removeTestGroupQuestions ){
            console.log('removeTestGroupQuestion.question',removeTestGroupQuestion)

            let question = await this.questionRepository.findOneBy({id:removeTestGroupQuestion.id});
            if (!question) {
                throw new NotFoundException('Question not found');
            }

            let testGroupQuestionNew = new TestGroupQuestion();
            testGroupQuestionNew.question = question
            testGroupQuestionNew.test_group = testGroup
    
            testGroupQuestionNew.created_by = req.user.userId
            await this.testGroupQuestionRepository.save(testGroupQuestionNew)
        }

        return true;
      }
}
