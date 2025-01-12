function storeEmployees(inputArr) {

    const employees = [];
    inputArr.forEach((name) => {
        const employee = {
            name,
            personalNumber: name.length
        };
        employees.push(employee);
    })

    employees.forEach((employee) => {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    })

}

storeEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);