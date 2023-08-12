import { ApiProperty } from "@nestjs/swagger";

export class successResponse {

@ApiProperty({
    example: 'success',
    description: 'status',
})
status: string;
@ApiProperty({
    description: 'status',
})
message?: string;

@ApiProperty({
    description: 'could contain some info',        
})
data?: object;


}