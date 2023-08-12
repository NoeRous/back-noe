import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateQuestionDto{

    @ApiProperty({ example: '¿Que es un cuento?' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: '/url_del_archivo' })
    @Optional()
    file_url: string

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    question_category_id: number

    @Optional()
    created_by:number
}