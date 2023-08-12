import { Test } from "src/modules/test/test.entity";
import { DataSource } from "typeorm";


export const testProviders = [
    {
        provide: 'TEST_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Test),
        inject: ['DATA_SOURCE']
    }
]