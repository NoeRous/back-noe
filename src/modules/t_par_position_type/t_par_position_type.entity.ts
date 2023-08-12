import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm"
@Entity({ schema: 'public', name: 't_par_position_type' })
export class TParPositionType {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ type:'varchar', length: 100})
    name: string

    @Column("text")
    description: string
}