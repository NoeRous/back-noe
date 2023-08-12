import { Optional } from "@nestjs/common"

export class UpdateTestGroupQuestionDto{


    @Optional()
    test_group_id:number

    @Optional()
    question_id:number

    updated_by:number

    
}