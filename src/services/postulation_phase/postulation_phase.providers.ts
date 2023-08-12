import { DataSource } from "typeorm";
import { PostulationPhase } from "src/modules/postulation_phase/postulation_phase.entity";

export const postulationPhaseProviders = [
    {
        provide: 'POSTULATION_PHASE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationPhase),
        inject: ['DATA_SOURCE']
    }
]