import { IsNumber } from 'class-validator'
export class CreateCalculatorDto {
    @IsNumber()
    firstNumber: number

    @IsNumber()
    secondNumber: number
}
