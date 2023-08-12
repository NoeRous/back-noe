import { Optional } from "@nestjs/common"

export class UpdateQuestionResponseDto{

    @Optional()
    name: string

    @Optional()
    file_url: string

    @Optional()
    is_valid: boolean

    @Optional()
    percentage: number

    @Optional()
    question_id: number
    
    @Optional()
    updated_by:number
}