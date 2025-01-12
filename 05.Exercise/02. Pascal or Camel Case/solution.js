function solve() {
  const textInputElement = document.querySelector('#text');
  const namingConventionElement = document.querySelector('#naming-convention');

  const resultElement = document.querySelector('.result-container #result');
  const validNamingConvention = ['Camel Case', 'Pascal Case'];

  if (!validNamingConvention.includes(namingConventionElement.value)) {
    resultElement.textContent = 'Error!';
    return;
  }

  const pascalCaseText = textInputElement.value
    .toLowerCase()
    .split(" ")
    .map((x) => x[0].toUpperCase().concat(x.slice(1)))
    .join("");

  resultElement.textContent =
    namingConventionElement.value === validNamingConvention[0]
      ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1))
      : pascalCaseText;

}