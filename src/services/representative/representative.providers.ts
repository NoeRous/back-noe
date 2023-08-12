import { DataSource } from "typeorm";
import { Representative } from "src/modules/representative/representative.entity";

export const  representativeProviders = [
    {
        provide: 'REPRESENTATIVE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Representative),
        inject: ['DATA_SOURCE']
    }
]