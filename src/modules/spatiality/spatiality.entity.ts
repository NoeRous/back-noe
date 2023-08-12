import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({ schema: 'public', name: 'spatiality' })
export class Spatiality {
    @PrimaryColumn()
    id: number
    @Column({ type:'varchar', length: 200})
    name: string

    @Column("text")
    description: string
}