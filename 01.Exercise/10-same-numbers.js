function sameNumber (number) {

    const lastDigit = number % 10;
    let currentNumber = number;
    let isSame = true;
    let sum = 0;
    
    while (currentNumber > 0) {
        const currentDigit = currentNumber % 10;
        if (currentDigit !== lastDigit) {
            isSame = false;
        }
        sum += currentDigit;
        currentNumber = parseInt(currentNumber / 10);
    }

    console.log(isSame);
    console.log(sum);
}