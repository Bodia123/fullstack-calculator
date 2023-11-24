import { Injectable } from '@nestjs/common'
import { CreateCalculatorDto } from './dto/create-calculator.dto'
import { SinglePercentDto } from './dto/create-percent.dto'
import { GetCalculatePercent } from './dto/create-calculate-percent.dto'
@Injectable()
export class CalculatorService {
    async add(createCalculatorDto: CreateCalculatorDto) {
        const result =
            createCalculatorDto.firstNumber + createCalculatorDto.secondNumber

        return result
    }

    async multiply(createCalculatorDto: CreateCalculatorDto) {
        const result =
            createCalculatorDto.firstNumber * createCalculatorDto.secondNumber
        return result
    }
    async divide(createCalculatorDto: CreateCalculatorDto) {
        const result =
            createCalculatorDto.firstNumber / createCalculatorDto.secondNumber
        return result
    }
    async subtract(createCalculatorDto: CreateCalculatorDto) {
        const result =
            createCalculatorDto.firstNumber - createCalculatorDto.secondNumber
        return result
    }
    async getPercent(GetCalculatePercent: GetCalculatePercent) {
        const result =
            (GetCalculatePercent.firstNumber / 100) *
            GetCalculatePercent.secondNumber
        switch (GetCalculatePercent.method) {
            case '-':
                return GetCalculatePercent.firstNumber - result
            case '+':
                return GetCalculatePercent.firstNumber + result
            case '*':
                return result
            case '/':
                return (
                    GetCalculatePercent.firstNumber /
                    (GetCalculatePercent.secondNumber / 100)
                )

            default:
                break
        }
        // return result
    }
    async getSinglePercent(SinglePercentDto: SinglePercentDto) {
        const result = SinglePercentDto.firstNumber / 100

        return result
    }
}
