function addItem() {
    const [textInputEl, valueInputEl] = document.querySelectorAll('input');

    function createOptionElement (text, value) {
        const option = document.createElement('option');
        option.textContent = text;
        option.value = value;
        return option;
    }

    document.querySelector('select#menu').append(createOptionElement
        (textInputEl.value, valueInputEl.value));

    textInputEl.value = '';
    valueInputEl.value = '';
}