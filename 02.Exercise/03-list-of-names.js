function listOfNames (arr) {
    arr.sort((a,b) => a.localeCompare(b)).map((name, index) => {
        const position = index + 1;
        console.log(`${position}.${name}`);
    });
}