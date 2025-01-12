window.addEventListener("load", solve);

function solve() {

  const adoptButton = document.getElementById("adopt-btn");
  const adoptionInfo = document.getElementById("adoption-info");
  const adoptedList = document.getElementById("adopted-list");

  const typeInput = document.getElementById("type");
  const ageInput = document.getElementById("age");
  const genderInput = document.getElementById("gender");

  function clearInputs() {
    typeInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
  }

  function createInput() {
    const type = typeInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;

    const liElement = createAdoptionElement(type, age, gender);

    adoptionInfo.appendChild(liElement);

    clearInputs();
  }

  function createAdoptionElement(typeAnimal, age, gender) {
    const pPetElement = document.createElement("p");
    pPetElement.textContent = `Pet:${typeAnimal}`;

    const pGenderElement = document.createElement("p");
    pGenderElement.textContent = `Gender:${gender}`;

    const pAgeElement = document.createElement("p");
    pAgeElement.textContent = `Age:${age}`;

    const articleElement = document.createElement("article");
    articleElement.appendChild(pPetElement);
    articleElement.appendChild(pGenderElement);
    articleElement.appendChild(pAgeElement);

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    const doneButton = document.createElement("button");
    doneButton.classList.add("done-btn");
    doneButton.textContent = "Done";

    const divElement = document.createElement("div");
    divElement.classList.add("buttons");
    divElement.appendChild(editButton);
    divElement.appendChild(doneButton);

    const liElement = document.createElement("li");
    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);

    editButton.addEventListener("click", () => {
      typeInput.value = typeAnimal;
      ageInput.value = age;
      genderInput.value = gender;

      liElement.remove();
    });

    doneButton.addEventListener("click", () => {
      divElement.remove();
      const clearButton = document.createElement("button");
      clearButton.classList.add("clear-btn");
      clearButton.textContent = "Clear";
      liElement.appendChild(clearButton);
      adoptedList.appendChild(liElement);

      clearButton.addEventListener("click", () => {
        liElement.remove();
      })
    })

    return liElement;
  }

  function onAdoptClickHandler(event) {
    event.preventDefault();
    createInput();
  }

  adoptButton.addEventListener("click", onAdoptClickHandler);
}