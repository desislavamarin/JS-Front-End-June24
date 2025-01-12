function isPerfectNumber(number) {

    const isNotPerfectMessage = "It's not so perfect.";

    if (number < 0 || !Number.isInteger(number)) {
        console.log(isNotPerfectMessage);
        return;
    }

    function getDivisors(n) {
        const halfNumber = n / 2;
        const divisors = [];
    
        for (let currentNumber = 0; currentNumber <= halfNumber; currentNumber++) {
            if (n % currentNumber !== 0) {
                continue;
            }
    
            divisors.push(currentNumber);
        }
        return divisors;
    }

    const sumDivisors = (numberArr) => numberArr.reduce((a, b) => a + b, 0);

    const divisors = getDivisors(number);

    const message = sumDivisors(divisors) === number ? "We have a perfect number!" : "It's not so perfect.";

    console.log(message);
}

isPerfectNumber(28);