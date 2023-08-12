import { DataSource } from "typeorm";
import { Position } from "src/modules/position/position.entity";

export const positionProviders = [
    {
        provide: 'POSITION_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Position),
        inject: ['DATA_SOURCE']
    }
]