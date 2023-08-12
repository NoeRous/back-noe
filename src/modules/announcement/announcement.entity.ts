import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { AnnouncementInstitutionPosition } from "../announcement_institution_position/announcement_institution_position.entity"
import { Expose, Transform } from "class-transformer";
import * as moment from 'moment';
moment.locale("es");

@Entity({ schema: 'public', name: 'announcement' })
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:'varchar', length: 200})
    name: string;

    @Column("text")
    description: string

    //@Transform(({ value }) => moment(value).format('D MMMM - YYYY'))
    @Column("date")
    date_init: Date

    //@Transform(({ value }) => moment(value).format('D MMMM - YYYY'))
    @Column("date")
    date_end: Date

    @Column({ default:true})
    state:boolean

    @Column({ type:'varchar', length: 50})
    cite: string

    @Column({type:'date',nullable:true})
    publication_date: Date

    @Column({type:'varchar',nullable:true})
    file_url: string

    @Column({ type:'int'})
    year: number

    @OneToMany(() => AnnouncementInstitutionPosition, announcementInstitutionPosition => announcementInstitutionPosition.announcement)
    announcementInstitutionPosition: AnnouncementInstitutionPosition[];

    //columnas para auditoria
    @CreateDateColumn()
    created_at:Date

    @Column({ type:'int', nullable:false, select:false})
    created_by: number

    @UpdateDateColumn({nullable:true, select:false})
    updated_at:Date

    @Column({ type:'int', nullable:true, select:false})
    updated_by: number

}