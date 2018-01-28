export class Calculator
{
    static add(number1, number2)
    {
        let result = number1 + number2;
        console.log(" Add : [" + number1 + "] + [" + number2 + "] is [" + result + "] ");
        return result;
    }

    multiply(number1, number2)
    {
        let result = number1 * number2;
        console.log(" Multiply : [" + number1 + "] x [" + number2 + "] is [" + result + "] ");
        return result;
    }
}