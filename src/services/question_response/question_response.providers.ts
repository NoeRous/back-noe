import { DataSource } from "typeorm";
import { QuestionResponse } from "src/modules/question_response/question_response.entity";

export const questionResponseProviders = [
    {
        provide: 'QUESTION_RESPONSE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(QuestionResponse),
        inject: ['DATA_SOURCE']
    }
]