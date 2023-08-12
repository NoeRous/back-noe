import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm"
import { Institution } from "../institution/institution.entity";

@Entity({ schema: 'public', name: 't_par_institution_type' })
export class TPartInstitutionType {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string

    @Column({ type:'varchar', length: 10})
    shortname: string

    @Column("text")
    description: string

    @OneToMany(() => Institution, institution => institution.t_par_institution_type, { cascade: true})
    institution: Institution[];
}