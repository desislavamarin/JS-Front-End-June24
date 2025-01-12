function solve(input) {

    const baristas = [];
    const countBaristas = Number(input.shift());

    for (let i = 0; i < countBaristas; i++) {
        const baristaInfo = input[i].split(' ');
        const baristaCoffee = baristaInfo[2].split(',');
        const barista = {
            name: baristaInfo[0],
            shift: baristaInfo[1],
            coffee: baristaCoffee,
        }
        baristas.push(barista);
    }

    let commandInput = input.shift();
    while (commandInput !== "Closed") {
        const commands = commandInput.split(" / ");
        const commandName = commands[0];
        const baristaName = baristas.find(barista => barista.name === commands[1]);
        
        if (commandName === "Prepare") {
            const shift = commands[2];
            const coffeeType = commands[3];
            if (baristaName.shift === shift && baristaName.coffee.includes(coffeeType)) {
                console.log(`${baristaName.name} has prepared a ${coffeeType} for you!`);
            } else {
                console.log(`${baristaName.name} is not available to prepare a ${coffeeType}.`);
            }
        } else if (commandName === "Change Shift") {
            const newShift = commands[2];
            baristaName.shift = newShift;
            console.log(`${baristaName.name} has updated his shift to: ${newShift}`);
        } else if (commandName === "Learn") {
            const coffeeInput = commands[2];
            if (baristaName.coffee.includes(coffeeInput)) {
                console.log(`${baristaName.name} knows how to make ${coffeeInput}.`);
            } else {
                console.log(`${baristaName.name} has learned a new coffee type: ${coffeeInput}.`);
            }
        }

        commandInput = input.shift();
    }

    baristas.forEach((barista) => {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.coffee.join(", ")}`);
    })

}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']);