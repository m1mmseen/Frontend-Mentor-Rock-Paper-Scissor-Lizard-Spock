const rules = document.querySelector(".rule-board");
const rulesToggle = document.querySelector(".rulesToggle");
const closeRules = document.getElementById("close");

rulesToggle.addEventListener("click", () => {
    rules.classList.add("visible");
})
closeRules.addEventListener("click", () => {
    rules.classList.remove("visible");
})