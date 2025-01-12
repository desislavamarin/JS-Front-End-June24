function toggle() {
    const buttonElement = document.querySelector('.head span.button');
    const extraEl = document.querySelector('#extra');
    const isHidden = extraEl.style.display === "none";

    if (isHidden || !extraEl.style.display) {
        extraEl.style.display = "block";
        buttonElement.textContent = "Less";
    } else {
        extraEl.style.display = "none";
        buttonElement.textContent = "More";
    }

}