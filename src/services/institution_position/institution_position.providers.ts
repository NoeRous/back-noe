import { DataSource } from "typeorm";
import { InstitutionPosition } from "src/modules/institution_position/institution_position.entity";

export const InstitutionPositionProviders = [
    {
        provide: 'INSTITUTION_POSITION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(InstitutionPosition),
        inject: ['DATA_SOURCE']
    }
]