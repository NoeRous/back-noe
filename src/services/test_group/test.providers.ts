import { DataSource } from "typeorm";
import { TestGroup } from "src/modules/test_group/test_group.entity";

export const testGroupProviders = [
    {
        provide: 'TEST_GROUP_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(TestGroup),
        inject: ['DATA_SOURCE']
    }
]