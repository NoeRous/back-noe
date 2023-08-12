import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ schema: 'public', name: 'representative' })
export class Representative {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'int' })
    identity_card: number

    @Column({ type: 'varchar', length: 5,nullable: true })
    identity_card_complement: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    last_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    mothers_last_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    husband_last_name: string

    @Column({ type: 'varchar', length: 50 })
    firts_name: string

    @Column({ type: 'varchar', length: 50, nullable: true })
    second_name: string

    @Column({ nullable: true })
    personal_number: string

  
    

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