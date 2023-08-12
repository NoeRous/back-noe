import { Applicant } from "src/modules/aplicant/aplicant.entity";
import { DataSource } from "typeorm";


export const applicantProviders = [
    {
        provide: 'APPLICANT_REPOSITORY',
        useFactory: (dataSource:DataSource) => dataSource.getRepository(Applicant),
        inject: ['DATA_SOURCE']
    }
]