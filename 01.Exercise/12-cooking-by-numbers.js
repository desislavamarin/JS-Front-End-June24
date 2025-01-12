function cooking(number, ...operations) {

    let currentNumber = number;

    for (const operation of operations) {
        switch (operation) {
            case "chop":
                currentNumber /= 2;
                break;
            case "dice":
                currentNumber = Math.sqrt(currentNumber);
                break;
            case "spice":
                currentNumber += 1;
                break;
            case "bake":
                currentNumber *= 3;
                break;
            case "fillet":
                currentNumber *= 0.80;
                break;
        }
        console.log(parseFloat(currentNumber.toFixed(2)));
    }
}