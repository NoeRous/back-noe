import { DataSource } from "typeorm";
import { PostulationTest } from "src/modules/postulation_test/postulation_test.entity";

export const postulationTestProviders = [
    {
        provide: 'POSTULATION_TEST_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationTest),
        inject: ['DATA_SOURCE']
    }
]