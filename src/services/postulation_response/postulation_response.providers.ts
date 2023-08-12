import { PostulationResponse } from "src/modules/postulation_response/postulation_response.entity";
import { DataSource } from "typeorm";

export const postulationResponseProviders = [
    {
        provide: 'POSTULATION_RESPONSE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(PostulationResponse),
        inject: ['DATA_SOURCE']
    }
]