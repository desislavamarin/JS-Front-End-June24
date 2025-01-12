function sumAndPrint (firstNumber, secondNumber) {

    let output = "";
    let sum = 0;

    for (let currentNumber = firstNumber; currentNumber <= secondNumber; currentNumber++) {
        output += currentNumber + " ";
        //output += `${currentNumber}`;
        sum += currentNumber;
    }

    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}