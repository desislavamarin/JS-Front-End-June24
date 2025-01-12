const BASE_URL = "http://localhost:3030/jsonstore/games/";

const gameList = document.getElementById("games-list");
const formElement = document.querySelector("#form form");

const loadButton = document.getElementById("load-games");
const addButton = document.getElementById("add-game");
const editButton = document.getElementById("edit-game");

const nameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

loadButton.addEventListener("click", loadGames);
addButton.addEventListener("click", addGame);
editButton.addEventListener("click", editGame);

async function loadGames() {
    gameList.innerHTML = "";

    const response = await fetch(BASE_URL);
    const result = await response.json();
    const games = Object.values(result);

    const gameElement = games.map(game => createGameElement(game.name, game.type, game.players, game._id));

    gameList.append(...gameElement);
}

function createGameElement(name, type, players, gameId) {
    const pNameElement = document.createElement("p");
    pNameElement.textContent = name;
    const pTypeElement = document.createElement("p");
    pTypeElement.textContent = type;
    const pPlayersElement = document.createElement("p");
    pPlayersElement.textContent = players;

    const divContentElement = document.createElement("div");
    divContentElement.classList.add("content");
    divContentElement.appendChild(pNameElement);
    divContentElement.appendChild(pTypeElement);
    divContentElement.appendChild(pPlayersElement);

    const changeButton = document.createElement("button");
    changeButton.classList.add("change-btn");
    changeButton.textContent = "Change";
    changeButton.addEventListener("click", () => {
        nameInput.value = name;
        typeInput.value = type;
        playersInput.value = players;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-game-id", gameId);
    })

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("change-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
        await fetch(`${BASE_URL}/${gameId}`), {
            method: "DELETE",
        }
        await loadGames();
    })

    const divContainerElement = document.createElement("div");
    divContainerElement.classList.add("buttons-container");
    divContainerElement.appendChild(changeButton);
    divContainerElement.appendChild(deleteButton);

    const divGameElement = document.createElement("div");
    divGameElement.classList.add("board-game");
    divGameElement.appendChild(divContentElement);
    divGameElement.appendChild(divContainerElement);

    return divGameElement;
}

async function addGame() {
    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, players }),
    })

    await loadGames();
}

async function editGame() {
    const gameId = formElement.getAttribute('data-game-id');

    const name = nameInput.value;
    const type = typeInput.value;
    const players = playersInput.value;

    clearInputs();

    await fetch(`${BASE_URL}/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, type, players, _id: gameId }),
    })

    await loadGames();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-game-id");
}

function clearInputs() {
    nameInput.value = "";
    typeInput.value = "";
    playersInput.value = "";
}