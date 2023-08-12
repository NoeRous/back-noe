import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from 'src/controllers/person/create-person.dto';
import { Person } from 'src/modules/person/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
    constructor(
        @Inject('PERSON_REPOSITORY')
        private personRepository: Repository<Person>
    ){}

    async findAll(): Promise<Person[]>{
        return this.personRepository.find();
    }

    create(person: CreatePersonDto): Promise<Person> {
         const personNew = new Person;
         personNew.firts_name = person.firts_name;
         personNew.second_name = person.second_name;
         personNew.last_name = person.last_name;
         personNew.mothers_last_name = person.mothers_last_name;
         personNew.husband_last_name = person.husband_last_name;
         personNew.address = person.address;
         personNew.birth_date = person.birth_date;
         personNew.email = person.email;
         personNew.personal_number = person.personal_number;
         personNew.phone = person.phone;
         personNew.identity_card = person.identity_card;
         personNew.identity_card_complement = person.identity_card_complement;
         personNew.tPartGender= person.tParGender
        return this.personRepository.save(personNew);
    }

    findPersonById(id:number){
        return this.personRepository.findOne({where:{id:id}, relations:['applicant']});
    }


    

    // findOne(id: number): Promise<any> {
    //     return this.personRepository.findOne({where:{id: id}})
    // }

}
