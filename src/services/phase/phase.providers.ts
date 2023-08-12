import { DataSource } from "typeorm";
import { Phase } from "src/modules/phase/phase.entity";

export const phaseProviders = [
    {
        provide: 'PHASE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Phase),
        inject: ['DATA_SOURCE']
    }
]