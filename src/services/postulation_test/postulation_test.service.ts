import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Postulation } from 'src/modules/postulation/postulation.entity';
import { PostulationQuestion } from 'src/modules/postulation_question/postulation_question.entity';
import { PostulationTest } from 'src/modules/postulation_test/postulation_test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostulationTestService {

    constructor(
        @Inject('POSTULATION_TEST_REPOSITORY')
        private postulationTestRepository: Repository<PostulationTest>,    
        @Inject('POSTULATION_REPOSITORY')
        private postulationRepository: Repository<Postulation>,  
        @Inject('TEST_REPOSITORY')
        private testRepository: Repository<Test>,
        @Inject('POSTULATION_QUESTION_REPOSITORY')
        private postulationQuestionRepository: Repository<PostulationQuestion>,
    ){}

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
            throw new NotFoundException('Postulation Test not found!');
        }

        const postulationQuestion = await this.postulationQuestionRepository.findOne({where:{postulation_test:{id:postulationTest.id}}});

        return postulationQuestion

    }
}
