function solve(input) {

    let spell = input.shift();

    for (let command of input) {
        let [commandName, arg1, arg2] = command.split("!");

        switch (commandName) {
            case "RemoveEven":
                spell = spell.split("")
                    .filter((char, index) => index % 2 === 0)
                    .join("");
                console.log(spell);
                break;
            case "TakePart":
                const startIndex = Number(arg1);
                const endIndex = Number(arg2);
                spell = spell.slice(startIndex, endIndex);
                console.log(spell);
                break;
            case "Reverse":
                if (spell.includes(arg1)) {
                    const reversedSub = arg1.split('').reverse().join('');
                    spell = spell.replace(arg1, '');
                    spell += reversedSub;
                    console.log(spell);
                } else {
                    console.log('Error');
                }
                break;
        }
    }

    console.log(`The concealed spell is: ${spell}`);
}

solve((["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"]));