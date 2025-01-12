function stringSubstring (word, text) {

    const match = text.split(" ").find((string) => string.toLowerCase() === word.toLowerCase());
    console.log(match ? word : `${word} not found!`);
}

stringSubstring('python',
'JavaScript is the best programming language');