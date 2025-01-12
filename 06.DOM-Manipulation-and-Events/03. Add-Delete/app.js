function addItem() {
    const itemsElement = document.querySelector('#items');
    const inputElement = document.querySelector('#newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);

    const deleteButton = document.createElement('a');
    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    liElement.append(deleteButton);

    deleteButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    inputElement.value = '';
}