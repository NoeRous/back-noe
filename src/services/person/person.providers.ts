import { DataSource } from "typeorm";
import { Person } from "src/modules/person/person.entity";

export const personProviders = [
    {
        provide: 'PERSON_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Person),
        inject: ['DATA_SOURCE']
    }
]