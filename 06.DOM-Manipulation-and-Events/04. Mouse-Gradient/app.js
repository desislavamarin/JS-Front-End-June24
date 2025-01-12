function attachGradientEvents() {
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', (e) => {
        const currentPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth

        const percent = (elementWidth / currentPosition) * 100;

        resultElement.textContent = `${percent}%`;
    });
}