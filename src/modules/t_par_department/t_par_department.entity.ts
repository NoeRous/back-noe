import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema:'public', name:'t_par_department'})
export class TParDepartment{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 100})
    name: string

    @Column({ type:'varchar', length: 10})
    shortname: string

    @Column({ default:true})
    state: boolean
}