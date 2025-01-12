function buyFruit (fruit, grams, kilogram) {

    let weightInKg = grams / 1000;

    console.log(`I need $${(weightInKg * kilogram).toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}