function printNxnMatrix (integer) {

    const getNumberTimes = (number, separator = " ") => {
        return `${number}${separator}`.repeat(number).trim();
    }

    for (let row = 0; row < integer; row++) {
        console.log(getNumberTimes(integer));
    }
}

printNxnMatrix(7);