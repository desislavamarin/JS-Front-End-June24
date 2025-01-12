function signCheck(num1, num2, num3) {
    const multiply = (a, b) =>  a * b;
    const product = multiply (num1, multiply (num2, num3));
    if (product >= 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}