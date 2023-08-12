import { DataSource } from "typeorm";
import { QuestionCategory } from "src/modules/question_category/question_category.entity";

export const questionCategoryProviders = [
    {
        provide: 'QUESTION_CATEGORY_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(QuestionCategory),
        inject: ['DATA_SOURCE']
    }
]