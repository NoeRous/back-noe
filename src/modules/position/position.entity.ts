import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from "typeorm"
import { TParPositionType } from "../t_par_position_type/t_par_position_type.entity"
import { Spatiality } from "../spatiality/spatiality.entity"
@Entity({ schema: 'public', name: 'position' })
export class Position {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => TParPositionType, (TParPositionType) => TParPositionType,{nullable:false})
    @JoinColumn({name: 't_par_position_type_id'})
    t_par_position_type: TParPositionType

    @ManyToOne(() => Spatiality, (Spatiality) => Spatiality,{nullable:true})
    @JoinColumn({name: 'spatiality_id'})
    spatiality: Spatiality

    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date

    @Column({ type:'int', select: false})
    created_by: number

    @UpdateDateColumn({nullable:true, select: false})
    updated_at:Date
    
    @Column({ type:'int', nullable:true, select: false})
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Column({ type:'int', nullable:true, select: false})
    deleted_by: number

}