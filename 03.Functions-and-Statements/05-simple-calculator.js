function calculate(numOne, numTwo, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            result = (numOne,numTwo) => numOne * numTwo;
            break;
        case "divide":
            result = (numOne,numTwo) => numOne / numTwo;
            break;
        case "add":
            result = (numOne,numTwo) => numOne + numTwo;
            break;
        case "subtract":
            result = (numOne,numTwo) => numOne - numTwo;
            break;
    }
    const operate = result(numOne, numTwo);

    console.log(result);
}

