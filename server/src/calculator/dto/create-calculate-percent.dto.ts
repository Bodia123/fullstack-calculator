import { IsNumber, IsString } from 'class-validator'
export class GetCalculatePercent {
    @IsNumber()
    firstNumber: number
    @IsNumber()
    secondNumber: number
    @IsString()
    method: string
}
