import { Controller, Post, Body } from '@nestjs/common'
import { CalculatorService } from './calculator.service'
import { CreateCalculatorDto } from './dto/create-calculator.dto'
import { GetCalculatePercent } from './dto/create-calculate-percent.dto'
import { SinglePercentDto } from './dto/create-percent.dto'

@Controller('calc')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}

    @Post('add')
    add(@Body() createCalculatorDto: CreateCalculatorDto) {
        return this.calculatorService.add(createCalculatorDto)
    }
    @Post('multiply')
    multiply(@Body() createCalculatorDto: CreateCalculatorDto) {
        return this.calculatorService.multiply(createCalculatorDto)
    }
    @Post('divide')
    divide(@Body() createCalculatorDto: CreateCalculatorDto) {
        return this.calculatorService.divide(createCalculatorDto)
    }
    @Post('subtract')
    subtract(@Body() createCalculatorDto: CreateCalculatorDto) {
        return this.calculatorService.subtract(createCalculatorDto)
    }
    @Post('percent')
    getPercent(@Body() getCalculatePercent: GetCalculatePercent) {
        return this.calculatorService.getPercent(getCalculatePercent)
    }
    @Post('single-percent')
    getSinglePercent(@Body() singlePercentDto: SinglePercentDto) {
        return this.calculatorService.getSinglePercent(singlePercentDto)
    }
}
