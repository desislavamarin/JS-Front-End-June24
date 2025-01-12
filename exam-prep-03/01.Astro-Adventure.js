function solve (input) {

    const numberAstronauts = Number(input.shift());
    const astronauts = {};

    for (let i = 0; i < numberAstronauts; i++) {
        const [astronautName, oxygenInput, energyInput] = input.shift().split(" ");
        astronauts[astronautName] = {
            oxygen: Number(oxygenInput),
            energy: Number(energyInput),
        }
    }

    const commands = {
        Explore(astronautName, energyNeeded) {
            if (astronauts[astronautName].energy > energyNeeded) {
                 const currentEnergy = astronauts[astronautName].energy - energyNeeded;
                 astronauts[astronautName].energy = currentEnergy;
                 console.log(`${astronautName} has successfully explored a new area and now has ${currentEnergy} energy!`);
            } else {
                console.log(`${astronautName} does not have enough energy to explore!`);
            }
        },
        Refuel (astronautName, amount) {
            const energyRecovered = Math.min(amount, 200 - astronauts[astronautName].energy);
            astronauts[astronautName].energy += energyRecovered;
            console.log(`${astronautName} refueled their energy by ${energyRecovered}!`);
        },
        Breathe(astronautName, amount) {
            astronauts[astronautName].oxygen
            const oxygenRecovered = Math.min(amount, 100 - astronauts[astronautName].oxygen);
            astronauts[astronautName].oxygen += oxygenRecovered;
            console.log(`${astronautName} took a breath and recovered ${oxygenRecovered} oxygen!`);
        }
    }

    let commandInput = input.shift();
    while (commandInput !== "End") {
        const [command, astronautName, unit] = commandInput.split(" - ");
        commands[command](astronautName, unit);

        commandInput = input.shift();
    }

    Object.keys(astronauts).forEach((astronaut) => {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronauts[astronaut].oxygen}, Energy: ${astronauts[astronaut].energy}`);
    })
}

solve([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']);