function solve (text, stringWord) {
    const result = text.replaceAll(stringWord, '*'.repeat(stringWord.length));

    console.log(result);
}