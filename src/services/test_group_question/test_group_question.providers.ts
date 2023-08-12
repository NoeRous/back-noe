import { DataSource } from "typeorm";
import { TestGroup } from "src/modules/test_group/test_group.entity";
import { TestGroupQuestion } from "src/modules/test_group_question/test_group_question.entity";

export const testGroupQuestionProviders = [
    {
        provide: 'TEST_GROUP_QUESTION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(TestGroupQuestion),
        inject: ['DATA_SOURCE']
    }
]