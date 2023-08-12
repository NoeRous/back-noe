import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateQuestionDto{

    @ApiProperty({ example: '¿Que es un cuento?' })
    @Optional()
    name: string

    @ApiProperty({ example: '/url_del_archivo' })
    @Optional()
    file_url: string

    @ApiProperty({ example: 1 })
    @Optional()
    question_category_id: number

    @Optional()
    updated_by:number
}