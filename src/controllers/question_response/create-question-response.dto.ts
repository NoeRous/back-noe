import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateQuestionResponseDto{

    @ApiProperty({ example: 'La respuesta es 10' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: '/sdfsdfsdf-as' })
    @Optional()
    file_url: string

    @ApiProperty({ example: false })
    @IsNotEmpty()
    is_valid: boolean

    @ApiProperty({ example: 0 })
    @IsNotEmpty()
    percentage: number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    question_id: number

    @Optional()
    created_by:number
}