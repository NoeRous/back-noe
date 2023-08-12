import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Commission } from "../commission/commission.entity"
import { Person } from "../person/person.entity"

@Entity({ schema: 'public', name: 'commission_internal' })
export class CommissionInternal {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 50, nullable: true })
    name_role: string

    @ManyToOne(() => Commission, (Commission) => Commission,{nullable:false})
    @JoinColumn({name: 'commission_id'})
    commission: Commission

    @ManyToOne(() => Person, (Person) => Person,{nullable:false})
    @JoinColumn({name: 'person_id'})
    person: Person

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