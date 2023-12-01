'use strict'

import {playAgainService, startGameService} from "./gameServices.js";


const symbols = document.querySelectorAll(".gamefield-start img");
const playAgainBtn = document.getElementById("play-again");


symbols.forEach(symbol => {
    symbol.addEventListener("click", () => {
        startGameService(symbol)
    })
});

playAgainBtn.addEventListener("click", playAgainService);

