import {switchGameField} from "./gameFieldSwitcher.js";

const images = [
    {
        "symbol": "Scissors",
        "beats": ["Lizard", "Paper"],
        "src":"assets/images/symbols/scissors.svg"
    },
    {
        "symbol": "Paper",
        "beats": ["Stone", "Spock"],
        "src":"assets/images/symbols/paper.svg"
    },
    {
        "symbol": "Stone",
        "beats": ["Scissors", "Lizard"],
        "src":"assets/images/symbols/stone.svg"
    },
    {
        "symbol": "Lizard",
        "beats": ["Spock", "Paper"],
        "src":"assets/images/symbols/lizard.svg"
    },
    {
        "symbol": "Spock",
        "beats": ["Scissors", "Stone"],
        "src":"assets/images/symbols/spock.svg"
    }
]

export function getSymbol(symbol) {
    let image = images.find(e => e.symbol === symbol)
    if(image) {
        return image;
    }
}

export async function randomSymbol(timeout) {
    await delay(timeout);
    return images[Math.floor(Math.random()*images.length)];
}

export function setSymbol(image, symbolsDestination) {
    let chosenSymbol = document.createElement("img");
    chosenSymbol.src = image.src;
    chosenSymbol.setAttribute("id", image.symbol);
    symbolsDestination.appendChild(chosenSymbol);
}

export async function compare(player, house) {
    const playersObject = getSymbol(player);
    await delay(800);
    return player === house ? "draw" : (playersObject.beats.includes(house) ? "You win" : "You lose");
}

export function playAgain(player, house, placeholder) {
    player.remove();
    house.remove();
    placeholder.classList.toggle("hidden");
    switchGameField();
    document.querySelector(".result").classList.toggle("visible");
    player.querySelector("img").classList.remove("winner");
    house.querySelector("img").classList.remove("winner");
}

function delay(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


