import { DataSource } from "typeorm";
import { PostulationState } from "src/modules/postulation_state/postulation_state.entity";

export const postulationStateProviders = [
    {
        provide: 'POSTULATION_STATE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationState),
        inject: ['DATA_SOURCE']
    }
]