function colorize() {
    const tableElement = document.querySelector('table tbody');
    const tableRowElement = tableElement.children;

    for (let i = 0; i < tableRowElement.length; i += 2) {
        tableRowElement[i].style.backgroundColor = "teal";
    }

    // const evenTableRowElement = document.querySelectorAll('table tbody tr:nth-child(even)');
    // for (const trElement of evenTableRowElement) {
    //     trElement.style.backgroundColor = 'teal';
    // }
}