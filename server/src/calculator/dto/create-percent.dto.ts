import { IsNumber } from 'class-validator'
export class SinglePercentDto {
    @IsNumber()
    firstNumber: number
}
