import { HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { now } from 'moment';
import { CreateTestDto } from 'src/controllers/test/create-test.dto';
import { UpdateTestDto } from 'src/controllers/test/update-test.dto';
import { Announcement } from 'src/modules/announcement/announcement.entity';
import { Position } from 'src/modules/position/position.entity';
import { Postulation } from 'src/modules/postulation/postulation.entity';
import { PostulationQuestion } from 'src/modules/postulation_question/postulation_question.entity';
import { PostulationTest } from 'src/modules/postulation_test/postulation_test.entity';
import { Question } from 'src/modules/question/question.entity';
import { Test } from 'src/modules/test/test.entity';
import { TestGroup } from 'src/modules/test_group/test_group.entity';
import { TestGroupQuestion } from 'src/modules/test_group_question/test_group_question.entity';
import { Repository, Tree } from 'typeorm';

@Injectable()
export class TestService {

    constructor(
        @Inject('TEST_REPOSITORY')
        private testRepository: Repository<Test>,
        @Inject('ANNOUNCEMENT_REPOSITORY')
        private announcementRepository: Repository<Announcement>,
        @Inject('POSITION_REPOSITORY')
        private positionRepository: Repository<Position>,
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<Question>,
        @Inject('TEST_GROUP_REPOSITORY')
        private testGroupRepository: Repository<TestGroup>,
        @Inject('POSTULATION_REPOSITORY')
        private postulationRepository: Repository<Postulation>,
        @Inject('POSTULATION_TEST_REPOSITORY')
        private postulationTestRepository: Repository<PostulationTest>,
        @Inject('TEST_GROUP_QUESTION_REPOSITORY')
        private testGroupQuestionRepository: Repository<TestGroupQuestion>,
        @Inject('POSTULATION_QUESTION_REPOSITORY')
        private postulationQuestionRepository: Repository<PostulationQuestion>
    ){}

    async findAll(): Promise<Test[]>{
        return this.testRepository.find({ relations:['announcement','position','position.t_par_position_type'],order:{created_at:'DESC'}});
    }

    findById(id:number): Promise<Test>{
        return this.testRepository.findOne({relations:{announcement:true,position:true},where: {id:id}});
    }

    async create(test: CreateTestDto): Promise<Test> {
        const announcement = await this.announcementRepository.findOneBy({id:test.announcement_id});
        if (!announcement) {
            throw new NotFoundException('Announcement not found');
        }

        const position = await this.positionRepository.findOneBy({id:test.position_id});
        if (!position) {
            throw new NotFoundException('Position not found');
        }

        const testNew = new Test()
        testNew.name = test.name
        testNew.description = test.description
        testNew.total_questions = test.total_questions
        testNew.is_random = test.is_random
        testNew.date_init = test.date_init
        testNew.date_end = test.date_end
        testNew.time = test.time
        testNew.minimum_score = test.minimum_score
        testNew.num_attemps = test.num_attemps
        testNew.questions_per_page = test.questions_per_page
        testNew.announcement = announcement
        testNew.position = position
        testNew.created_by = test.created_by
        return this.testRepository.save(testNew)
    }

    async updateById(id: number, updateData: Partial<UpdateTestDto>): Promise<Test> {
        const test = await this.testRepository.findOneBy({id:id});
        if (!test) {
            throw new NotFoundException('Test not found');
        }
        const updatedTest= Object.assign(test, updateData);
        return this.testRepository.save(updatedTest);
    }

    async deleteById(id: number): Promise<void> {
        const test = await this.testRepository.findOneBy({id:id});
        if (!test) {
          throw new NotFoundException('Test not found!');
        }
        await this.testRepository.delete(id);
    }


    async createTestPostulation(postulationId:number,req:any): Promise<any>{

        const postulationTestArray = [];
        const postulation = await this.postulationRepository.findOne({relations:['announcementInstitutionPosition.announcement','announcementInstitutionPosition.institutionPosition.position'],where:{id:postulationId}});
        const announcementId =  postulation.announcementInstitutionPosition.announcement.id;
        const positionId  = postulation.announcementInstitutionPosition.institutionPosition.position.id;
        const test = await this.testRepository.findOne({where: {announcement:{id:announcementId},position:{id:positionId}}});

        if (!test) {
            throw new NotFoundException('Test not found!');
        }

        const testGroups = await this.testGroupRepository.find({where:{test:{id:test.id}},order:{sequence:'ASC'}})

        for (let testGroup of testGroups) {
            
            const questions = await this.questionRepository.find({relations:{test_group_question:true},where:{test_group_question:{test_group:{id:testGroup.id}}}});

            // Mezclar el array
            const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

            // Obtener los primeros dos elementos
            const selectedQuestions = shuffledQuestions.slice(0, testGroup.num_questions);

            for(let selectedQuestion of selectedQuestions){
                let postulationTest = {
                    test_group_question_id: selectedQuestion.test_group_question[0].id,
                    test_group_id: testGroup.id,
                    question_id: selectedQuestion.id,
                    order:postulationTestArray.length +1
                  };
                  // Agrega el nuevo objeto al array
                  postulationTestArray.push(postulationTest);
            }
        }
        //crear postulation test
        const postulationTestNew = new PostulationTest();
        postulationTestNew.date_time_init = new Date()
        postulationTestNew.postulation = postulation
        postulationTestNew.test = test
        postulationTestNew.created_by = req.user.userId
        postulationTestNew.ip = req.ip


        const postulationTestResp = await this.postulationTestRepository.save(postulationTestNew);

        const postulationTest = await this.postulationTestRepository.findOne({where:{id:postulationTestResp.id}});
       
        //registrar las preguntas
       for(let pt of postulationTestArray){
        let testGroupQuestion = await this.testGroupQuestionRepository.findOne({where:{id:pt.test_group_question_id}});
        
        let postulationQuestiontNew = new PostulationQuestion();
        postulationQuestiontNew.order = pt.order
        postulationQuestiontNew.test_group_question = testGroupQuestion
        postulationQuestiontNew.postulation_test = postulationTest
        postulationQuestiontNew.created_by = req.user.userId

        let postulationQuestionResp = await this.postulationQuestionRepository.save(postulationQuestiontNew);

       }

       return this.postulationQuestionRepository.find({relations:['test_group_question.test_group','test_group_question.question.question_response'],where:{postulation_test:{id:postulationTest.id}},order:{order:'ASC'}});

    }


    async findTestPostulation(postulationId:number,req:any): Promise<any>{

        const postulation = await this.postulationRepository.findOne({relations:['announcementInstitutionPosition.announcement','announcementInstitutionPosition.institutionPosition.position'],where:{id:postulationId}});
        const announcementId =  postulation.announcementInstitutionPosition.announcement.id;
        const positionId  = postulation.announcementInstitutionPosition.institutionPosition.position.id;
        const test = await this.testRepository.findOne({where: {announcement:{id:announcementId},position:{id:positionId}}});
        if (!test) {
            throw new NotFoundException('test not found!');
        }
        if (!postulation) {
            throw new NotFoundException('Postulation not found!');
        }

        const postulationTest = await this.postulationTestRepository.findOne({where:{postulation:{id:postulation.id}}});

        if (!postulationTest) {
            //verificar si el examen esta disponible
            const startDate = new Date(test.date_init).toISOString().slice(0, 10);
            const endDate = new Date(test.date_end).toISOString().slice(0, 10);
            const currentDate = new Date().toISOString().slice(0, 10);
            if (!(currentDate >= startDate && currentDate <= endDate)) {
                throw new NotFoundException('Examen No Disponible: Inicio '+startDate+' Fin '+endDate);
            }
            const response = {
                successful:true,
                message: 'Exito',
                postulationTest,
                postulation,
                data: await this.createTestPostulation(postulationId,req)
            };
            return response;
        }{
            throw new NotFoundException('Ya realizó el examen');

            //verificar si tiene tiempo 
            let date1 = new Date(postulationTest.date_time_init);
            let date2 = new Date();
            let differenceInMilliseconds = date2.getTime() - date1.getTime();
            let minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
           
            if(minutes>test.time){
                throw new NotFoundException('Terminó su tiempo!');
            }
            
            const response = {
                successful:true,
                message: 'Exito',
                postulationTest,
                postulation,
                data: await this.postulationQuestionRepository.find({relations:['test_group_question.test_group','test_group_question.question.question_response'],where:{postulation_test:{id:postulationTest.id}},order:{order:'ASC'}})
            };
            return response;
        }
    }


}
