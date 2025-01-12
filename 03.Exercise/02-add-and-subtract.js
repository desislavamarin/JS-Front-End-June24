function addAndSubtract(num1, num2, num3) {

    const sumTwoNumbers = (x, y) => x + y;
    const subtractTwoNumber = (x, y) => x - y;

    // const firstResult = sumTwoNumbers(num1, num2);
    // const secondResult = subtractTwoNumber(firstResult, num3);

    const result = subtractTwoNumber(
        sumTwoNumbers(num1, num2),
        num3
    );

    console.log(result);
} 