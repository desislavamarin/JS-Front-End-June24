function solve(number, inputArr) {
    let result = inputArr
        .slice(0, number)
        .reverse()
        .join(' ');

    console.log(result);
}