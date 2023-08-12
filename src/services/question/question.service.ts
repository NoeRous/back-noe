import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Pagination, paginate } from 'nestjs-typeorm-paginate';
import { CreateQuestionDto } from 'src/controllers/question/create-question.dto';
import { UpdateQuestionDto } from 'src/controllers/question/update-question.dto';
import { Question } from 'src/modules/question/question.entity';
import { QuestionCategory } from 'src/modules/question_category/question_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {

    constructor(
        @Inject('QUESTION_REPOSITORY')
        private questionRepository: Repository<Question>,
        @Inject('QUESTION_CATEGORY_REPOSITORY')
        private questionCategoryRepository: Repository<QuestionCategory>,
      
    ){}


    async findAll(categoryId: number = null): Promise<Question[]> {
      var  queryWhere = categoryId?{question_category:{id:categoryId}}:{};
      return this.questionRepository.find({where:queryWhere,relations:['question_category', 'question_response'], order:{question_response:{created_at:'DESC'}, id:'ASC'}});
    }

    async findByUser(categoryId: number = null,req_user:any): Promise<Question[]> {
      var  queryWhere = categoryId?{question_category:{id:categoryId},created_by:req_user.userId}:{created_by:req_user.userId};
      return this.questionRepository.find({where:queryWhere,relations:['question_category', 'question_response'], order:{question_response:{created_at:'DESC'}, id:'ASC'}});
    }

    async findAllPaginate(page: number = 1, limit: number = 10): Promise<Pagination<Question>> {
        const queryBuilder = this.questionRepository
          .createQueryBuilder('question')
          .leftJoinAndSelect('question.question_category', 'question_category')
          .leftJoinAndSelect('question.question_response', 'question_response')
          .orderBy('question.created_at', 'DESC');
      
        const options = {
          page,
          limit,
          route: '/questions', // Ruta base para la paginación
        };
      
        return paginate<Question>(queryBuilder, options);
      }
      
    async findByCategoryId(
        categoryId: number,
        page: number = 1,
        limit: number = 10,
      ): Promise<Pagination<Question>> {
        const queryBuilder = this.questionRepository
          .createQueryBuilder('question')
          .leftJoinAndSelect('question.question_category', 'question_category')
          .where('question_category.id = :categoryId', { categoryId });
      
        const options = {
          page,
          limit,
          route: '/questions', // Ruta base para la paginación
        };
      
        return paginate<Question>(queryBuilder, options);
      }

    findById(id:number): Promise<Question>{
        return this.questionRepository.findOne({relations:['question_category', 'question_response'],where: {id:id}});
    }

    async create(question: CreateQuestionDto): Promise<Question> {
        const questionCategory = await this.questionCategoryRepository.findOneBy({id:question.question_category_id});
        if (!questionCategory) {
            throw new NotFoundException('Question Category not found');
        }

        const questionNew = new Question();
        questionNew.name = question.name
        questionNew.file_url = question.file_url
        questionNew.question_category = questionCategory,
        questionNew.created_by = question.created_by

        return this.questionRepository.save(questionNew)
    }

    async updateById(id: number, updateData: Partial<UpdateQuestionDto>): Promise<Question> {
        const question = await this.questionRepository.findOne({relations:['question_category', 'question_response'],where: {id:id}});
        if (!question) {
            throw new NotFoundException('Question not found');
        }
        if (updateData.name) {
            question.name = updateData.name
        }
        if (updateData.file_url) {
            question.file_url = updateData.file_url
        }

        if (updateData.question_category_id) {
            const questionCategory = await this.questionCategoryRepository.findOneBy({id:updateData.question_category_id});

            if (!questionCategory) {
                throw new NotFoundException('Question Category not found');
            }
            question.question_category = questionCategory
        }
        const updatedQuestion = await this.questionRepository.save(question);

        return updatedQuestion;
    }

    async deleteById(id: number): Promise<void> {
        const question = await this.questionRepository.findOneBy({id:id});
        if (!question) {
          throw new NotFoundException('Question not found!');
        }
        await this.questionRepository.softDelete(id);
    }

}
