import {switchGameField} from "./gameFieldSwitcher.js";
import {compare, getSymbol, playAgain, randomSymbol, setSymbol} from "./gameHelper.js";

const playersPick = document.querySelector(".players-symbol");
const housePick = document.querySelector(".houses-symbol");
const placeholder = document.querySelector(".placeholder");
let houseSymbole = '';
let playersSymbole = '';
let score = 0;
let scoreText = document.getElementById("score");
let result = '';

export function startGameService(symbol) {
        switchGameField();
        setSymbol(getSymbol(symbol.id), playersPick);
        randomSymbol(1000).then((symbol) => {
            placeholder.classList.toggle("hidden");

            setSymbol(symbol, housePick);
            houseSymbole = document.querySelector(".houses-symbol img");
            playersSymbole = document.querySelector(".players-symbol img");
            compare(playersSymbole.getAttribute("id"), houseSymbole.getAttribute("id")).then(el => {
                result = el;
                document.getElementById("result-text").innerText = result;
                document.querySelector(".result").classList.toggle("visible");
                switch (result) {
                    case "You win":
                        document.querySelector(".players-symbol img").classList.add("winner");
                        score++;
                        scoreText.innerText = score.toString();
                        break;
                    case "You lose":
                        document.querySelector(".houses-symbol img").classList.add("winner");
                }
            });
        });
}

export function playAgainService() {
    playAgain(playersSymbole, houseSymbole, placeholder);
}





