import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionCategoryDto } from 'src/controllers/question_category/create-question-category.dto';
import { UpdateQuestionCategoryDto } from 'src/controllers/question_category/update-question-category.dto';
import { QuestionCategory } from 'src/modules/question_category/question_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionCategoryService {


    constructor(
        @Inject('QUESTION_CATEGORY_REPOSITORY')
        private questionCategoryRepository: Repository<QuestionCategory>,
      
    ){}

    async findAll(): Promise<QuestionCategory[]>{
        return this.questionCategoryRepository.find({ order:{created_at:'DESC'}});
    }

    findById(id:number){
        return this.questionCategoryRepository.findOneBy({id:id});
    }

    async create(questionCategory: CreateQuestionCategoryDto): Promise<CreateQuestionCategoryDto> {
        return this.questionCategoryRepository.save(questionCategory)
    }

    async updateById(id: number, updateData: Partial<UpdateQuestionCategoryDto>): Promise<QuestionCategory> {
        const announcement = await this.questionCategoryRepository.findOneBy({id:id});
        if (!announcement) {
            throw new NotFoundException('Account not found');
        }
        const updatedQuestionCategory = Object.assign(announcement, updateData);
        return this.questionCategoryRepository.save(updatedQuestionCategory);
    }

    async deleteById(id: number): Promise<void> {
        const questionCategory = await this.questionCategoryRepository.findOneBy({id:id});
        if (!questionCategory) {
          throw new NotFoundException('Account not found!');
        }
        await this.questionCategoryRepository.delete(id);
    }

}
