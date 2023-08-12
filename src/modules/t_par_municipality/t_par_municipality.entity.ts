import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TParDepartment } from "../t_par_department/t_par_department.entity";
import { TParProvince } from "../t_par_province/t_par_province.entity";

@Entity({schema:'public', name:'t_par_municipality'})
export class TParMunicipality{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 50})
    name: string

    @Column({ default:true})
    state: boolean

    @ManyToOne(() => TParProvince, (TParProvince) => TParProvince,{nullable:false})
    @JoinColumn({name: 't_par_province_id'})
    tParProvince: TParProvince
}
