import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Unique } from "typeorm"
import { Announcement } from "../announcement/announcement.entity"
import { InstitutionPosition } from "../institution_position/institution_position.entity"

@Entity({ schema: 'public', name: 'announcement_institution_position' })
@Unique(['institutionPosition.id', 'announcement.id'])
export class AnnouncementInstitutionPosition {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => InstitutionPosition, (InstitutionPosition) => InstitutionPosition,{nullable:false})
    @JoinColumn({name: 'institution_position_id'})
    institutionPosition: InstitutionPosition

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:false})
    @JoinColumn({name: 'announcement_id'})
    announcement: Announcement

    @Column()
    number_available: number

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date
    @Column({ type:'varchar', length: 50, select: false})
    created_by: string
    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date
    @Column({ type:'varchar', length: 50,nullable:true, select:false})
    updated_by: string
}