import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Account{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    account_name: string

    @Column()
    company_name: string

    @Column()
    logo_url: string

    @Column()
    interval: number

    @Column({nullable: true})
    label_1: string

    @Column({nullable: true})
    label_2: string

    @Column({nullable: true})
    label_3: string

    @Column({nullable: true})
    label_4: string

    @Column({nullable: true})
    label_5: string

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date

    @DeleteDateColumn()
    deleted_at: Date; // Deletion date
}