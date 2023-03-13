console.log("Serwus!")

let button = document.querySelector(".js-section__button");
let description = document.querySelector(".js-section__description");
let buttonName = document.querySelector(".js-buttonName");
console.log(description)

button.addEventListener("click", () => {
    description.classList.toggle("hidden");
    buttonName.innerText = description.classList.contains("hidden") ? "Pokaż" : "Ukryj";
    console.log("był klik")



});