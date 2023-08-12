import { Optional } from "@nestjs/common"

export class UpdateTestGroupDto{

    @Optional()
    name: string

    @Optional()
    description: string

    @Optional()
    num_questions: number

    @Optional()
    points_per_question:number

    @Optional()
    sequence:number

    @Optional()
    test_id: number

    @Optional()
    updated_by:number

}