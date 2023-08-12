import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ schema: 'public', name: 'commission_headquarter' })
export class CommissionHeadquarter {
    @PrimaryGeneratedColumn()
    id: number


    @Column({ type: 'varchar', length: 50, nullable: true })
    name: string

    @Column({ nullable: true })
    address: string

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