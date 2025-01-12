window.addEventListener("load", solve);

function solve() {

  const laptopModelInput = document.getElementById("laptop-model");
  const storageSpaceInput = document.getElementById("storage");
  const priceInput = document.getElementById("price");

  const addButton = document.getElementById("add-btn");
  const checkList = document.getElementById("check-list");
  const laptopsList = document.getElementById("laptops-list");
  const clearButton = document.querySelector(".clear");

  addButton.addEventListener("click", () => {
    const laptopModel = laptopModelInput.value;
    const storageSpace = storageSpaceInput.value;
    const price = priceInput.value;

    const liElement = createCheckListElement(laptopModel, storageSpace, price);

    checkList.appendChild(liElement);

    addButton.setAttribute("disabled", "disabled");
    clearInputs();
  })

  clearButton.addEventListener("click", () => {
    window.location.reload();
  })

  function clearInputs() {
    laptopModelInput.value = '';
    storageSpaceInput.value = '';
    priceInput.value = '';
  }

  function createCheckListElement(model, storage, price) {
    const pModelElement = document.createElement("p");
    pModelElement.textContent = `${model}`;

    const pStorageElement = document.createElement("p");
    pStorageElement.textContent = `Memory: ${storage} TB`;

    const pPriceElement = document.createElement("p");
    pPriceElement.textContent = `Price: ${price}$`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(pModelElement);
    articleElement.appendChild(pStorageElement);
    articleElement.appendChild(pPriceElement);

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "edit");
    editButton.textContent = "edit"

    const okButton = document.createElement("button");
    okButton.classList.add("btn", "ok");
    okButton.textContent = "ok";

    const liElement = document.createElement("li");
    liElement.classList.add("laptop-item");
    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(okButton);

    editButton.addEventListener("click", () => {
      laptopModelInput.value = model;
      storageSpaceInput.value = storage;
      priceInput.value = price;

      liElement.remove();
      addButton.removeAttribute("disabled");
    });

    okButton.addEventListener("click", () => {
      liElement.remove();
      editButton.remove();
      okButton.remove();
      laptopsList.appendChild(liElement);
      addButton.removeAttribute("disabled");
    })
    
    return liElement;
  }
  
}