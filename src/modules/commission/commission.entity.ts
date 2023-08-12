import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Phase } from "../phase/phase.entity"
import { CommissionHeadquarter } from "../commission_headquarter/commission_headquarter.entity"
import { CommissionInternal } from "../commission_internal/commission_internal.entity"
import { CommissionExternal } from "../commission_external/commission_external.entity"
import { CommissionAssigned } from "../commission_assigned/commission_assigned.entity"

@Entity({ schema: 'public', name: 'commission' })
export class Commission {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    name: string

    @Column({ nullable: true })
    date: Date

    @ManyToOne(() => Phase, (Phase) => Phase,{nullable:false})
    @JoinColumn({name: 'phase_id'})
    phase: Phase

    @ManyToOne(() => CommissionHeadquarter, (CommissionHeadquarter) => CommissionHeadquarter,{nullable:false})
    @JoinColumn({name: 'commission_headquarter_id'})
    commissionHeadquarter: CommissionHeadquarter

    @OneToMany(() => CommissionInternal, commissionInternal => commissionInternal.commission)
    commissionInternal: CommissionInternal[];

    @OneToMany(() => CommissionExternal, commissionExternal => commissionExternal.commission)
    commissionExternal: CommissionExternal[];

    @OneToMany(() => CommissionAssigned, commissionAssigned => commissionAssigned.commission)
    commissionAssigned: CommissionAssigned[];

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