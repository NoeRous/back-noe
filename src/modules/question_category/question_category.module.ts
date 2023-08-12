import { Module } from '@nestjs/common';
import { QuestionCategoryController } from 'src/controllers/question_category/question_category.controller';
import { DatabaseModule } from 'src/database/database.module';
import { questionCategoryProviders } from 'src/services/question_category/question_category.providers';
import { QuestionCategoryService } from 'src/services/question_category/question_category.service';

@Module({
    imports: [DatabaseModule],
    controllers: [QuestionCategoryController],
    providers: [
        ...questionCategoryProviders,
        QuestionCategoryService
    ]})
export class QuestionCategoryModule {}
