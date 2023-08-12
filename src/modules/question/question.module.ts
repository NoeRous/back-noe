import { Module } from '@nestjs/common';
import { QuestionController } from 'src/controllers/question/question.controller';
import { DatabaseModule } from 'src/database/database.module';
import { questionProviders } from 'src/services/question/question.providers';
import { QuestionService } from 'src/services/question/question.service';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';
import { questionResponseProviders } from 'src/services/question_response/question_response.providers';
import { QuestionResponseService } from 'src/services/question_response/question_response.service';

@Module({
    imports: [DatabaseModule],
    controllers: [QuestionController],
    providers: [
        ...questionProviders,
        ...questionCategoryProviders,
        ...questionResponseProviders,
        QuestionService,
        QuestionCategoryService,
        QuestionResponseService
    ]})
export class QuestionModule {}
