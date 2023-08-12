import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"

export class UpdateTestDto{
    @ApiProperty({ example: 'Examen' })
    @Optional()
    name: string

    @ApiProperty({ example: 'Examen de el cargo ...' })
    @Optional()
    description: string

    @ApiProperty({ example: 5 })
    @Optional()
    total_questions: number

    @ApiProperty({ example: true })
    @Optional()
    is_ramdom:boolean

    @ApiProperty({ example: '2023-06-28' })
    @Optional()
    date_init:Date

    @ApiProperty({ example: '2023-06-28' })
    @Optional()
    date_end: Date

    @ApiProperty({ example: 60 })
    @Optional()
    time: number

    @ApiProperty({ example: 71 })
    @Optional()
    minimun_score:number

    @ApiProperty({ example: 1 })
    @Optional()
    num_attemps:number

    @ApiProperty({ example: 2 })
    @Optional()
    questions_per_page:number

    @ApiProperty({ example: 1 })
    @Optional()
    announcement_id: number

    @ApiProperty({ example: 1 })
    @Optional()
    position_id: number

    @Optional()
    updated_by:number

}