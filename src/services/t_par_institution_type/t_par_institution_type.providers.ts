import { DataSource } from "typeorm";
import { TPartInstitutionType } from "src/modules/t_par_institution_type/t_par_institution_type.entity";

export const TParInstitutionTypeProviders = [
    {
        provide: 'T_PAR_INSTITUTION_TYPE_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(TPartInstitutionType),
        inject: ['DATA_SOURCE']
    }
]