import { IsNotEmpty } from "class-validator";

export class UpdateAnnouncementDto{

    name: string;

    description: string;

    date_ini: Date

    date_end: Date

    state: boolean

    cite:string
}