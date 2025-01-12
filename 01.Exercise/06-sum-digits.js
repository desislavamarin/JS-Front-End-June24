function sumDigits (number) {

    const numberAsString = number.toString();
    let sum = 0;
    for (let index = 0; index < numberAsString.length; index += 1) {
        sum += Number(numberAsString[index]);
    }

    console.log(sum);
}