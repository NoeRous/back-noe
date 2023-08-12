import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Question } from "src/modules/question/question.entity"

export class CreateTestGroupQuestionDto{

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    test_group_id:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    question_id:number


    questions:Question[]

    created_by:number

}