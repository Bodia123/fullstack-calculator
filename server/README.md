# Backend for calculator

This application have few routes for calculating

# All routes only for 'Post' request

1. (+) '/add' recieve object with {firstNumber:number,secondNumber:number}

2. (\*) '/multiply' recieve object with {firstNumber:number,secondNumber:number}

3. (/) '/divide' recieve object with {firstNumber:number,secondNumber:number}

4. (-) '/subtract' recieve object with {firstNumber:number,secondNumber:number}

5. '/single-percent' recieve object with {firstNumber:number}
   in response sends the value of the number from 100%

6. '/percent' recieve object with {firstNumber:number,method:string,secondNumber:number}
