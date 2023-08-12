import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { TPartInstitutionType } from "../t_par_institution_type/t_par_institution_type.entity"
import { TParMunicipality } from "../t_par_municipality/t_par_municipality.entity"

@Entity({ schema: 'public', name: 'institution' })
export class Institution {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 8})
    code: string

    @ManyToOne(() => TPartInstitutionType, (TPartInstitutionType) => TPartInstitutionType,{nullable:true})//ojo
    @JoinColumn({name: 't_par_institution_type_id'})
    t_par_institution_type: TPartInstitutionType

    @Column({ type:'varchar', length: 100})
    name: string

    @Column({ type:'varchar', length: 255})
    description: string

    @ManyToOne(() => Institution, (Institution) => Institution,{nullable:true})
    @JoinColumn({name: 'institution_id'})
    institution: Institution

    @Column({ type:'varchar', length: 4})
    code_normal: string

    @Column({ type:'varchar', length: 10})
    code_ue: string

    @ManyToOne(() => TParMunicipality, (TParMunicipality) => TParMunicipality,{nullable:true})
    @JoinColumn({name: 't_par_municipality_id'})
    tParMunicipality: TParMunicipality

    @Column({ type:'varchar', length: 255})
    address: string

    @Column({ type:'varchar', length: 100})
    email: string

    @Column({ type:'varchar', length: 30})
    phone: string

    @Column({ type:'varchar', length: 50})
    coordinate: string

    @Column()
    date_creation: Date

    @Column({default:true})
    state: boolean

    @Column({ type:'varchar', length: 50})
    image: string

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select:false})
    created_by: string
    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select:false})
    updated_by: string
}