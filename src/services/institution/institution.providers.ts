import { DataSource } from "typeorm";
import { Person } from "src/modules/person/person.entity";
import { Institution } from "src/modules/institution/institution.entity";

export const institutionProviders = [
    {
        provide: 'INSTITUTION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Institution),
        inject: ['DATA_SOURCE']
    }
]