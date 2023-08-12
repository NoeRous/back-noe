import { Inject, Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateQuestionResponseDto } from 'src/controllers/question_response/create-question-response.dto';
import { UpdateQuestionResponseDto } from 'src/controllers/question_response/update-question-response.dto';
import { Question } from 'src/modules/question/question.entity';
import { QuestionResponse } from 'src/modules/question_response/question_response.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionResponseService {
    constructor(
        @Inject('QUESTION_RESPONSE_REPOSITORY')
        private questionResponseRepository: Repository<QuestionResponse>,
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<Question>,
      
    ){}

    async findAll(): Promise<QuestionResponse[]>{
        return this.questionResponseRepository.find({ relations:{question:true},order:{created_at:'DESC'}});
    }

    findById(id:number): Promise<QuestionResponse>{
        return this.questionResponseRepository.findOne({relations:{question:true},where: {id:id}});
    }

    async create(questionResponse: CreateQuestionResponseDto): Promise<QuestionResponse> {
        const question = await this.questionRepository.findOneBy({id:questionResponse.question_id});
        if (!question) {
            throw new NotFoundException('Question Category not found');
        }


        const questionResponseNew = new QuestionResponse();
        questionResponseNew.name = questionResponse.name
        questionResponseNew.file_url = questionResponse.file_url
        questionResponseNew.question = question,
        questionResponseNew.is_valid = questionResponse.is_valid
        questionResponseNew.percentage = questionResponse.percentage
        questionResponseNew.created_by = questionResponse.created_by

        return this.questionResponseRepository.save(questionResponseNew)
    }

    async updateById(id: number, updateData: Partial<UpdateQuestionResponseDto>): Promise<QuestionResponse> {
        const questionResponse = await this.questionResponseRepository.findOneBy({id:id});
        if (!questionResponse) {
            throw new NotFoundException('Question Response not found id = '+id);
        }

        if (updateData.name) {
            questionResponse.name = updateData.name
        }
        if (updateData.file_url) {
            questionResponse.file_url = updateData.file_url
        }
        if (updateData.is_valid === true || updateData.is_valid === false ) {
            questionResponse.is_valid = updateData.is_valid
        }
        if (updateData.percentage) {
            questionResponse.percentage = updateData.percentage
        }
        // if (updateData.question_id) {
        //     const question = await this.questionRepository.findOneBy({id:updateData.question_id});

        //     if (!question) {
        //         throw new NotFoundException('Question not found');
        //     }
        //     questionResponse.question= question
        // }
        const updatedquestionResponse = await this.questionResponseRepository.save(questionResponse);

        return updatedquestionResponse;
    }

    async deleteById(id: number): Promise<void> {
        const questionResponse = await this.questionResponseRepository.findOneBy({id:id});
        if (!questionResponse) {
          throw new NotFoundException('Question Response not found!');
        }
        this.questionResponseRepository.softDelete(id);
        throw new HttpException('Se elimino el registro', HttpStatus.ACCEPTED);
    }
}
