const BASE_URL = "http://localhost:3030/jsonstore/records";

const recordListElement = document.getElementById("list");
const formElement = document.querySelector("#form form");

const nameInput = document.getElementById("p-name");
const stepsInput = document.getElementById("steps");
const caloriesInput = document.getElementById("calories");

const loadButton = document.getElementById("load-records");
const addButton = document.getElementById("add-record");
const editButton = document.getElementById("edit-record");

loadButton.addEventListener("click", loadRecords);
addButton.addEventListener("click", addRecord);
editButton.addEventListener("click", editRecord);

function clearInput() {
    nameInput.value = "";
    stepsInput.value - "";
    caloriesInput.value = "";
}

async function loadRecords() {
    recordListElement.innerHTML = "";
    
    const response = await fetch(BASE_URL);
    const result = await response.json();
    const records = Object.values(result);

    const recordElement = records.map(record => createRecordElement(record.name, record.steps, record.calories, record._id));

    recordListElement.append(...recordElement);
}

async function addRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInput();

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, steps, calories }),
    })

    await loadRecords();
}

async function editRecord() {
    const name = nameInput.value;
    const steps = stepsInput.value;
    const calories = caloriesInput.value;

    clearInput();

    const recordId = formElement.setAttribute("data-id");

    await fetch(`${BASE_URL}/${recordId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, steps, calories, _id:recordId }),
    })

    await loadRecords();
    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");

    formElement.removeAttribute('data-id');
}

function createRecordElement(name, steps, calories, recordId) {
    const pNameElement = document.createElement("p");
    pNameElement.textContent = name;
    const pStepsElement = document.createElement("p");
    pStepsElement.textContent = steps;
    const pCaloriesElement = document.createElement("p");
    pCaloriesElement.textContent = calories;

    const divInfoElement = document.createElement("div");
    divInfoElement.classList.add("info");
    divInfoElement.appendChild(pNameElement);
    divInfoElement.appendChild(pStepsElement);
    divInfoElement.appendChild(pCaloriesElement);

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = name;
        stepsInput.value = steps;
        caloriesInput.value = calories;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
    })

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async() => {
        await fetch(`${BASE_URL}/${recordId}`, {
            method: "DELETE",
        })

        await loadRecords();
    })

    const divWrapperElement = document.createElement("div");
    divWrapperElement.appendChild(changeButton);
    divWrapperElement.appendChild(deleteButton);

    const liRecordElement = document.createElement("li");
    liRecordElement.classList.add("record");
    liRecordElement.appendChild(divInfoElement);
    liRecordElement.appendChild(divWrapperElement);

    return liRecordElement;
}