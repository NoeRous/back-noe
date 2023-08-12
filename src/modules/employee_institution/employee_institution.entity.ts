import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Employee } from "../employee/employee.entity";
import { Institution } from "../institution/institution.entity";
import { Announcement } from "../announcement/announcement.entity";

@Entity({schema:'public',name:'employee_institution'})
export class EmployeeInstitution{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Employee, (Employee) => Employee,{nullable:false})
    @JoinColumn({name: 'employee_id'})
    employee: Employee

    @ManyToOne(() => Institution, (Institution) => Institution,{nullable:false})
    @JoinColumn({name: 'institution_id'})
    institution: Institution

    @ManyToOne(() => Announcement, (Announcement) => Announcement,{nullable:false})
    @JoinColumn({name: 'announcement_id'})
    announcement: Announcement

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