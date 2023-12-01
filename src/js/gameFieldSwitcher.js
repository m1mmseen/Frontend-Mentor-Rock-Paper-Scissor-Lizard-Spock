const startingField = document.querySelector(".gamefield-start");
const scoringField = document.querySelector(".gamefield-scoring");


export function switchGameField() {
    startingField.classList.toggle("visible");
    scoringField.classList.toggle("visible");
}