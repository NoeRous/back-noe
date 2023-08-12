import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateTestDto{

    @ApiProperty({ example: 'Examen' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: 'Examen de el cargo ...' })
    @IsNotEmpty()
    description: string

    @ApiProperty({ example: 5 })
    @IsNotEmpty()
    total_questions: number

    @ApiProperty({ example: true })
    @IsNotEmpty()
    is_random:boolean

    @ApiProperty({ example: '2023-06-28' })
    @IsNotEmpty()
    date_init:Date

    @ApiProperty({ example: '2023-06-28' })
    @IsNotEmpty()
    date_end: Date

    @ApiProperty({ example: 60 })
    @IsNotEmpty()
    time: number

    @ApiProperty({ example: 71 })
    @IsNotEmpty()
    minimum_score:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    num_attemps:number

    @ApiProperty({ example: 2 })
    @IsNotEmpty()
    questions_per_page:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    announcement_id: number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    position_id: number

    @Optional()
    created_by:number

}