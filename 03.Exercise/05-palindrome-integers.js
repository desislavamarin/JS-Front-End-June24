function palindromeIntegers(arrayOfIntegers) {

    function determinateIsNumberAPalindrome(number) {
        const reversedNumber = Number(number.toString().split("").reverse().join(""));
        return number === reversedNumber;
    }

    arrayOfIntegers.forEach((number) => {
        console.log(determinateIsNumberAPalindrome(number));
    });
}

palindromeIntegers([32,2,232,1010]);