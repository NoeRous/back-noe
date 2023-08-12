import { DataSource } from "typeorm";
import { Question } from "src/modules/question/question.entity";
import { PostulationQuestion } from "src/modules/postulation_question/postulation_question.entity";

export const postulationQuestionProviders = [
    {
        provide: 'POSTULATION_QUESTION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationQuestion),
        inject: ['DATA_SOURCE']
    }
]