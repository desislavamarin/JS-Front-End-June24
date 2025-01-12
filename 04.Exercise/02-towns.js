function storeTowns(inputArr) {

    const towns = inputArr.reduce((acc, curr) => {
        const [town, latitude, longitude] = curr.split(" | ");
        acc.push({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        })
        return acc;
    }, []);

    towns.forEach((town) => {
        console.log(town);
    })

}

storeTowns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);