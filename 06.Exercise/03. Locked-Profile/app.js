function lockedProfile() {
    const buttonElements = document.querySelectorAll('div.profile button');

    function showMoreClickHandler (event) {
        const [, unlockInputEl] = event.target.parentElement.querySelectorAll('input');
        const button = event.target;
        const hiddenDataEl = button.parentElement.querySelector('div');

        if (!unlockInputEl.checked) {
            return;
        }

        if (button.textContent === 'Show more') {
            hiddenDataEl.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            hiddenDataEl.style.display = 'none';
            button.textContent = 'Show more';
        }
    }

    buttonElements.forEach((buttonEl) => 
        buttonEl.addEventListener('click', showMoreClickHandler));

}