import { Module } from '@nestjs/common';
import { QuestionResponseController } from 'src/controllers/question_response/question_response.controller';
import { DatabaseModule } from 'src/database/database.module';
import { questionProviders } from 'src/services/question/question.providers';
import { QuestionService } from 'src/services/question/question.service';
import { questionResponseProviders } from 'src/services/question_response/question_response.providers';
import { QuestionResponseService } from 'src/services/question_response/question_response.service';
import { QuestionCategory } from '../question_category/question_category.entity';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [QuestionResponseController],
    providers: [
        ...questionResponseProviders,
        ...questionProviders,
        ...questionCategoryProviders,
        QuestionResponseService,
        QuestionService,
        QuestionCategory
    ]})
export class QuestionResponseModule {}
