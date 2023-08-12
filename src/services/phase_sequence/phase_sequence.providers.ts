import { DataSource } from "typeorm";
import { PhaseSequence } from "src/modules/phase_sequence/phase_sequence.entity";

export const phaseSequenceProviders = [
    {
        provide: 'PHASE_SEQUENCE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PhaseSequence),
        inject: ['DATA_SOURCE']
    }
]