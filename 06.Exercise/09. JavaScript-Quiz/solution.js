function solve() {
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  const userAnswers = [];

  const sectionElements = document.querySelectorAll('section');

  function showUserResults () {
    const correctAnswersCount = userAnswers
      .reduce((totalCount, currentAnswer, index) =>
        currentAnswer === correctAnswers[index]
          ? (totalCount += 1)
          : totalCount, 0);

    const headingResult = document.querySelector('ul#results h1');
    headingResult.textContent = correctAnswersCount === correctAnswers.length
      ? `You are recognized as top JavaScript fan!`
      : `You have ${correctAnswersCount} right answers`;

    headingResult.parentElement.parentElement.style.display = 'block';
  }

  function onClickHandler(event) {
    const sectionToHide = sectionElements[userAnswers.length];
    const sectionToShow = sectionElements[userAnswers.length + 1];

    if (!!sectionToHide) {
      sectionToHide.style.display = 'none';
    }

    if (!!sectionToShow) {
      sectionToShow.style.display = 'block';
    }

    userAnswers.push(event.target.textContent.trim());

    if (userAnswers.length === correctAnswers.length) {
      showUserResults(userAnswers, correctAnswers);
    }
  }

  document.querySelectorAll('.answer-wrap').forEach((wrapEl) =>
    wrapEl.addEventListener('click', onClickHandler));
}