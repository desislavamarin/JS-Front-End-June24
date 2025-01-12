function findHashTag (inputText) {

    const regex = /#[A-Za-z]+/gm;
    const matches = inputText.matchAll(regex);
    for (const match of matches) {
        console.log(match[0].substring(1 ));
    }
}

findHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');