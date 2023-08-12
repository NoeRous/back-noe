import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Person } from "../person/person.entity";
import { EmployeeInstitution } from "../employee_institution/employee_institution.entity";

@Entity({schema:'public',name:'employee'})
export class Employee{

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Person, (Person) => Person,{nullable:false})
    @JoinColumn({name: 'person_id'})
    person: Person

    @Column({ type:'varchar', length: 200})
    position: string

    @OneToMany(() => EmployeeInstitution, employeeInstitution => employeeInstitution.employee)
    employeeInstitution: EmployeeInstitution[];

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date

    @Column({ type:'int', nullable:false, select:false})
    created_by: number

    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date

    @Column({ type:'int', nullable:true, select:false})
    updated_by: number

}