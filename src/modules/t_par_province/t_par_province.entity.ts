import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TParDepartment } from "../t_par_department/t_par_department.entity";

@Entity({schema:'public', name:'t_par_province'})
export class TParProvince{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 50})
    name: string

    @Column({ default:true})
    state: boolean

    @ManyToOne(() => TParDepartment, (TParDepartment) => TParDepartment,{nullable:false})
    @JoinColumn({name: 't_par_department_id'})
    tParDepartment: TParDepartment
}
