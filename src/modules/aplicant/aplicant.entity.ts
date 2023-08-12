import { Entity, Column,JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne } from "typeorm"
import { Person } from "../person/person.entity"

@Entity({ name: 'applicant' })
export class Applicant {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Person, (Person) => Person,{nullable:false})
    @JoinColumn({name: 'person_id'})
    person: Person

    @Column({ type:'varchar', length: 20,nullable:true})
    rda_number: string

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select:false})
    created_by: string
    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select:false})
    updated_by: string
}