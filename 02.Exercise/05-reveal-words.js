function revealWords (inputWords, inputText) {

    const specialWords = inputWords.split(", ");
    let finalSentence = inputText;

    specialWords.forEach((word) => {
        const searchedValue = "*".repeat(word.length);
        finalSentence = finalSentence.replace(searchedValue, word);
    });

    console.log(finalSentence);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);