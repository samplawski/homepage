{
    const welcome = () => {
        console.log("Serwus!")
    }
    welcome();


    const showHideDescription = () => {
        const button = document.querySelector(".js-section__button");
        const description = document.querySelector(".js-section__description");
        const buttonName = document.querySelector(".js-buttonName");

        button.addEventListener("click", () => {
            description.classList.toggle("hidden");
            buttonName.innerText = description.classList.contains("hidden") ? "Pokaż" : "Ukryj";
            console.log("times the button has been clicked") /*added because it is fun watching the clicks being added up*/
        });
    }
    showHideDescription();
}