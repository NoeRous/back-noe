import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostulationResponseDto } from 'src/controllers/postulation_response/create-postulation-response.dto';
import { Postulation } from 'src/modules/postulation/postulation.entity';
import { PostulationQuestion } from 'src/modules/postulation_question/postulation_question.entity';
import { PostulationResponse } from 'src/modules/postulation_response/postulation_response.entity';
import { PostulationTest } from 'src/modules/postulation_test/postulation_test.entity';
import { QuestionResponse } from 'src/modules/question_response/question_response.entity';
import { Test } from 'src/modules/test/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostulationResponseService {
    constructor(
        @Inject('POSTULATION_RESPONSE_REPOSITORY')
        private postulationResponseRepository: Repository<PostulationResponse>,
        @Inject('POSTULATION_REPOSITORY')
        private postulationRepository: Repository<Postulation>,
        @Inject('POSTULATION_TEST_REPOSITORY')
        private postulationTestRepository: Repository<PostulationTest>,
        @Inject('POSTULATION_QUESTION_REPOSITORY')
        private postulationQuestionRepository: Repository<PostulationQuestion>,
        @Inject('QUESTION_RESPONSE_REPOSITORY')
        private questionResponseRepository: Repository<QuestionResponse>,
        @Inject('TEST_REPOSITORY')
        private testRepository: Repository<Test>,
    ) { }

    async createOrDelete(data: CreatePostulationResponseDto, req: any): Promise<any> {

        const postulation = await this.postulationRepository.findOneBy({ id: data.postulation_id });
        if (!postulation) {
            throw new NotFoundException('No existe la postulación');
        }

        const postulationTest = await this.postulationTestRepository.findOne({ where: { postulation: { id: postulation.id } } });
        if (!postulationTest) {
            throw new NotFoundException('No existe el examen de la postulación');
        }

        const postulationQuestions = await this.postulationQuestionRepository.find({ relations: ['test_group_question.test_group', 'test_group_question.question.question_response'], where: { postulation_test: { id: postulationTest.id } } });
        if (!postulationQuestions) {
            throw new NotFoundException('No existe las preguntas creadas de la postulación');
        }



        for (let postulation_response of data.postulation_responses) {

            if (!postulation_response || !postulation_response.test_group_question_id) {
                throw new NotFoundException('No envio test_group_question');
            }
            let postulationQuestion = await this.postulationQuestionRepository.findOne({ relations: ['test_group_question.question.question_response'], where: { postulation_test: { id: postulationTest.id }, test_group_question: { id: postulation_response.test_group_question_id } } });

            if (!postulationQuestion) {
                throw new NotFoundException('Envio test_group_question id invalido');
            }

            let questionResponse = await this.questionResponseRepository.findOne({ where: { id: postulation_response.question_response_id } });

            if (!questionResponse) {
                throw new NotFoundException('Envio question_response id invalido');
            }

            if (postulationQuestion.test_group_question.question.type_form == 'radio') {

                let postulationResponses = await this.postulationResponseRepository.find({ select: ['id'],where: { postulation_question: { id: postulationQuestion.id } } });
                
                if(postulationResponses.length > 0){
                    let postulationResponseIds: number[] = postulationResponses.map((response) => response.id);
                    let postResp = await this.postulationResponseRepository.delete(postulationResponseIds);
                }
                let postulationResponseNew = new PostulationResponse();
                postulationResponseNew.response_time = postulation_response.response_time
                postulationResponseNew.postulation_question = postulationQuestion
                postulationResponseNew.question_response = questionResponse
                postulationResponseNew.created_by = req.user.userId
                postulationResponseNew.updated_by = req.user.userId
                let postResp = await this.postulationResponseRepository.save(postulationResponseNew);
            } else {
                let postulationResponse = await this.postulationResponseRepository.findOne({ where: { postulation_question: { id: postulationQuestion.id }, question_response: { id: postulation_response.question_response_id } } });

                if (!postulationResponse) {
                    let postulationResponseNew = new PostulationResponse();
                    postulationResponseNew.response_time = postulation_response.response_time
                    postulationResponseNew.postulation_question = postulationQuestion
                    postulationResponseNew.question_response = questionResponse
                    postulationResponseNew.created_by = req.user.userId
                    postulationResponseNew.updated_by = req.user.userId

                    let postResp = await this.postulationResponseRepository.save(postulationResponseNew);
                } else {
                    let postResp = await this.postulationResponseRepository.delete(postulationResponse.id);
                }
            }
        }

        const postulationResponse = await this.postulationResponseRepository.findOne({ where: { postulation_question: {} } });
        postulationTest.date_time_end = new Date();
        //calcular nota
        postulationTest.total_score = await this.calculatePercentageSum(postulationTest.id);//ojo todos valen 1

        await this.postulationTestRepository.save(postulationTest);
        //cálculo tiempo transcurrido
        let date1 = new Date(postulationTest.date_time_init);
        let date2 = new Date(postulationTest.date_time_end);
        let differenceInMilliseconds = date2.getTime() - date1.getTime();
        let minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
        postulationTest.test_time = minutes

        return await this.postulationTestRepository.save(postulationTest);
    }

    async calculatePercentageSum(idPostulacionTest: number): Promise<number> {
        const result = await this.questionResponseRepository
            .createQueryBuilder('qr')
            .select('SUM(qr.percentage)', 'sum')
            .leftJoin(PostulationResponse, 'pr', 'pr.question_response_id = qr.id')
            .leftJoin(PostulationQuestion, 'pq', 'pq.id = pr.postulation_question_id')
            .leftJoin(PostulationTest, 'pt', 'pt.id = pq.postulation_test_id')
            .where('pt.id = :idPostulacionTest', { idPostulacionTest })
            .getRawOne();

        return parseFloat(result.sum) || 0;
    }

    async sendPostulationResponses(data: CreatePostulationResponseDto, req: any): Promise<any> {

        const postulation = await this.postulationRepository.findOne({ relations: ['announcementInstitutionPosition.announcement', 'announcementInstitutionPosition.institutionPosition.position'], where: { id: data.postulation_id } });
        const announcementId = postulation.announcementInstitutionPosition.announcement.id;
        const positionId = postulation.announcementInstitutionPosition.institutionPosition.position.id;
        const test = await this.testRepository.findOne({ where: { announcement: { id: announcementId }, position: { id: positionId } } });
        if (!postulation) {
            throw new NotFoundException('Postulation not found!');
        }

        const postulationTest = await this.postulationTestRepository.findOne({ where: { postulation: { id: postulation.id } } });

        //verificar si tiene tiempo 
        let dateTestInit = new Date(postulationTest.date_time_init);
        let dateTestEnd = new Date();
        let testDifferenceInMilliseconds = dateTestEnd.getTime() - dateTestInit.getTime();
        let min = Math.floor(testDifferenceInMilliseconds / (1000 * 60));

        if (min > test.time) {
            throw new NotFoundException('Terminó su tiempo!');
        }

        return await this.createOrDelete(data, req)

    }

}
