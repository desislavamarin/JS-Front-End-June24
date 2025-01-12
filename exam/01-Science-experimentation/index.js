function experimentation(input) {

    const chemicals = {};
    const countChemicals = Number(input.shift());

    for (let i = 0; i < countChemicals; i++) {
        const [chemicalName, quantity] = input.shift().split(" # ");
        chemicals[chemicalName] = {
            quantity: Number(quantity),
        }
    }

    let commandInput = input.shift();
    while (commandInput !== "End") {
        const command = commandInput.split(" # ");
        const commandName= command[0];
        const chemicalName = command[1];

        if (commandName === "Mix") {
            const secondChemical = command[2];
            const amount = Number(command[3]);

            if (chemicals[chemicalName].quantity >= amount && chemicals[secondChemical].quantity >= amount) {
                chemicals[chemicalName].quantity -= amount;
                chemicals[secondChemical].quantity -= amount;
                console.log(`${chemicalName} and ${secondChemical} have been mixed. ${amount} units of each were used.`);
            } else {
                console.log(`Insufficient quantity of ${chemicalName}/${secondChemical} to mix.`);
            }
        } else if (commandName === "Replenish") {
            const amount = Number(command[2]);

            if (!chemicals[chemicalName]) {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
            } else {
                const addedAmount = Math.min(amount, 500 - chemicals[chemicalName].quantity);

                if (chemicals[chemicalName].quantity + amount > 500) {
                    console.log(`${chemicalName} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`);
                } else {
                    console.log(`${chemicalName} quantity increased by ${amount} units!`);
                }
                chemicals[chemicalName].quantity += addedAmount;
            }
        } else if (commandName === "Add Formula") {
            const formula = command[2];
            if (!chemicals[chemicalName]) {
                console.log(`The Chemical ${chemicalName} is not available in the lab.`);
            } else { 
                Object.defineProperty(chemicals[chemicalName], "formula", {value: formula});
                console.log(`${chemicalName} has been assigned the formula ${chemicals[chemicalName].formula}.`);
            }
        }

        commandInput = input.shift();
    }

    Object.keys(chemicals).forEach((chemical) => {

        if (chemicals[chemical].formula) {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}, Formula: ${chemicals[chemical].formula}`);
        } else {
            console.log(`Chemical: ${chemical}, Quantity: ${chemicals[chemical].quantity}`);
        }

    })

}

experimentation([ '4',
    'Water # 200',
    'Salt # 100',
    'Acid # 50',
    'Base # 80',
    'Mix # Water # Salt # 50',
    'Replenish # Salt # 150',
    'Add Formula # Acid # H2SO4',
    'End']);