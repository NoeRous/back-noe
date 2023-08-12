import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateApplicantDto } from 'src/controllers/applicant/create-applicant.dto';
import { Applicant } from 'src/modules/aplicant/aplicant.entity';
import { Repository } from 'typeorm';
import { PersonService } from '../person/person.service';
import { Person } from 'src/modules/person/person.entity';

@Injectable()
export class ApplicantService {

    constructor(
        @Inject('APPLICANT_REPOSITORY')
        private applicantRepository: Repository<Applicant>,
        // @Inject('PERSON_REPOSITORY')
        // private personRepository: Repository<Person>
      
    ){}

    async create(applicant: CreateApplicantDto): Promise<CreateApplicantDto> {
        // const person: Person = await this.personRepository.findOneBy({id:applicant.person_id}) 
        // const aplicantNew = new Applicant();
        // aplicantNew.person = person;
        // aplicantNew.rda_number = applicant.rda_number;

        return this.applicantRepository.save(applicant)
    }

    // create(person: number, rda_number:string): Promise<any> {
    //     console.log("id --servicio ",person);
    //     return this.applicantRepository.save({person_id:person,rda_number:rda_number})
    // }

    async findAll(): Promise<Applicant[]>{
        return this.applicantRepository.find();
    }
}
