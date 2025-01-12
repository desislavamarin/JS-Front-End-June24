function addItem() {
    const itemsElement = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText');
    const itemText = inputElement.value;
    const liElement = document.createElement('li');
    liElement.textContent = itemText;
    itemsElement.append(liElement);
    inputElement.value = '';
}