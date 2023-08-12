import { DataSource } from "typeorm";
import { TPartGender } from "src/modules/t_part_gender/t_part_gender.entity";

export const tParGenderProviders = [
    {
        provide: 'T_PAR_GENDER_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(TPartGender),
        inject: ['DATA_SOURCE']
    }
]