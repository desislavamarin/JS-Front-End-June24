const BASE_URL = "http://localhost:3030/jsonstore/appointments/";

const loadButton = document.getElementById("load-appointments");
const addButton = document.getElementById("add-appointment");
const editButton = document.getElementById("edit-appointment");

const carModelInput = document.getElementById("car-model");
const carServiceInput = document.getElementById("car-service");
const dateInput = document.getElementById("date");

const appointmentsList = document.getElementById("appointments-list");
const formElement = document.querySelector("#form form");

loadButton.addEventListener("click", loadAppointments);
addButton.addEventListener("click", addAppointment);
editButton.addEventListener("click", editAppointment);

async function addAppointment() {
    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;
    
    clearInputs();

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, date, service }),
    })
    
    await loadAppointments();
}

async function editAppointment() {
    const model = carModelInput.value;
    const service = carServiceInput.value;
    const date = dateInput.value;

    clearInputs();

    const carId = formElement.getAttribute("data-id");

    await fetch(`${BASE_URL}/${carId}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ model, date, service, _id:carId }),
    })

    await loadAppointments();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
}



async function loadAppointments() {
    appointmentsList.innerHTML = "";

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const cars = Object.values(result);

    const carElements = cars.map(car => createCarElement(car.model, car.service, car.date, car._id));

    appointmentsList.append(...carElements);
}

function createCarElement(model, service, date, carId) {
    const hModelElement = document.createElement("h2");
    hModelElement.textContent = model;

    const hDateElement = document.createElement("h3");
    hDateElement.textContent = date;

    const hServiceElement = document.createElement("h3");
    hServiceElement.textContent = service;

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        carModelInput.value = model;
        carServiceInput.value = service;
        dateInput.value = date;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-id", carId);
    })

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${BASE_URL}/${carId}`, {
            method: "DELETE",
        })

        await loadAppointments();
    })

    const divButtons = document.createElement("div");
    divButtons.classList.add("buttons-appointment");
    divButtons.appendChild(changeButton);
    divButtons.appendChild(deleteButton);

    const liElement = document.createElement("li");
    liElement.classList.add("appointment");
    liElement.appendChild(hModelElement);
    liElement.appendChild(hDateElement);
    liElement.appendChild(hServiceElement);
    liElement.appendChild(divButtons);

    return liElement;
}

function clearInputs() {
    carModelInput.value = "";
    carServiceInput.value = "";
    dateInput.value = "";
}