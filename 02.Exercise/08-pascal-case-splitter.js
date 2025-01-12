function pascalCaseSplitter (input) {

    const regex = /[A-Z][a-z]*/g;
    const matches = input.matchAll(regex);

    let output = [];
    for (const match of matches) {
        output.push(match);
    }

    console.log(output.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');