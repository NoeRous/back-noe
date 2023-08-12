import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, DeleteDateColumn } from "typeorm"
import { Institution } from "../institution/institution.entity"
import { Position } from "../position/position.entity"
@Entity({ schema: 'public', name: 'institution_position' })
export class InstitutionPosition {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Institution, (Institution) => Institution,{nullable:false})
    @JoinColumn({name: 'institution_id'})
    institution: Institution

    @ManyToOne(() => Position, (Position) => Position,{nullable:false})
    @JoinColumn({name: 'position_id'})
    position: Position

    @Column({ type:"boolean", default:true})
    enabled: boolean

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date

    @Column({ type:'int', select:false})
    created_by: number

    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date

    @Column({ type:'int',nullable:true, select:false})
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Column({ type:'int', nullable:true, select: false})
    deleted_by: number
}