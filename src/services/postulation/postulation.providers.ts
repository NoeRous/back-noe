import { DataSource } from "typeorm";
import { Postulation } from "src/modules/postulation/postulation.entity";

export const postulationProviders = [
    {
        provide: 'POSTULATION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Postulation),
        inject: ['DATA_SOURCE']
    }
]