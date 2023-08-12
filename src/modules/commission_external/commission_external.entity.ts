import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Commission } from "../commission/commission.entity"
import { Representative } from "../representative/representative.entity"

@Entity({ schema: 'public', name: 'commission_external' })
export class CommissionExternal {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 50, nullable: true })
    name_role: string

    @Column({ nullable: false })
    name_institution: string

    @ManyToOne(() => Commission, (Commission) => Commission,{nullable:false})
    @JoinColumn({name: 'commission_id'})
    commission: Commission

    @ManyToOne(() => Representative, (Representative) => Representative,{nullable:false})
    @JoinColumn({name: 'representative_id'})
    representative: Representative

    //columnas para auditoria
    @CreateDateColumn()
    created_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    created_by: number

    @UpdateDateColumn({ nullable: true, select: false })
    updated_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    updated_by: number

    @DeleteDateColumn()
    deleted_at: Date

    @Column({ type: 'int', nullable: true, select: false })
    deleted_by: number
}