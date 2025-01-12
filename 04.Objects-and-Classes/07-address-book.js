function addressBook(input) {
    const addressBook = {};

    for (const entries of input) {
        let [name, address] = entries.split(':');
        addressBook[name] = address;
    }

    Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));

}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);