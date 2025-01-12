function solve(inputArr) {
    let evenSum = 0;
    let oddSum = 0;

    inputArr
        .filter(function (number) {
            return number % 2 === 0;
        })
        .forEach(function (number) {
            evenSum += number;
        });

    inputArr
        .filter(function (number) {
            return number % 2 !== 0;
        })
        .forEach(function (number) {
                oddSum += number;
        });

    console.log(evenSum - oddSum);

}