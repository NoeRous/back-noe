import { DataSource } from "typeorm";
import { Position } from "src/modules/position/position.entity";
import { TParPositionType } from "src/modules/t_par_position_type/t_par_position_type.entity";

export const tParPositionTypeProviders = [
    {
        provide: 'T_PAR_POSITION_TYPE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(TParPositionType),
        inject: ['DATA_SOURCE']
    }
]