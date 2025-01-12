window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById('add-btn');
  const checkList = document.getElementById('check-list');
  const contactList = document.getElementById('contact-list');

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const categoryInput = document.getElementById('category');

  addButton.addEventListener('click', () => {
    const name = nameInput.value;
    const phone = phoneInput.value;
    const category = categoryInput.value;

    const liElement = createCheckListElement(name, phone, category);

    checkList.append(liElement);

    clearInputs();
  })

  function clearInputs() {
    nameInput.value = '';
    phoneInput.value = '';
    categoryInput.value = '';
  }

  function createCheckListElement(name, phoneNumber, category) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name: ${name}`;

    const pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone: ${phoneNumber}`;

    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category: ${category}`;

    const articleElement = document.createElement('article');
    articleElement.append(pNameElement);
    articleElement.append(pPhoneElement);
    articleElement.append(pCategoryElement);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');

    const divElement = document.createElement('div');
    divElement.classList.add('buttons');
    divElement.append(editButton);
    divElement.append(saveButton);

    const liElement = document.createElement('li');
    liElement.append(articleElement);
    liElement.append(divElement);

    editButton.addEventListener('click', () => {
      nameInput.value = name;
      phoneInput.value = phoneNumber;
      categoryInput.value = category;

      liElement.remove();
    });

    saveButton.addEventListener('click', () => {
      divElement.remove();
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');
      liElement.append(deleteButton);
      contactList.append(liElement);

      deleteButton.addEventListener('click', () => {
        liElement.remove();
      })
    });

    return liElement;
  }
}
