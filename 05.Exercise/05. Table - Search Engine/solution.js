function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tableRowElements = document.querySelectorAll('table.container tbody tr');
   const searchFieldElement = document.getElementById('searchField');

   function getMatchElements(input) {
      return [...tableRowElements].filter((rowEl) =>
         rowEl.textContent.toLowerCase().includes(input.toLowerCase()));
   }

   function clearPreviousState () {
      [...tableRowElements].forEach((rowEl) => {
         rowEl.classList.remove('select')
      });
   }

   function onClick() {
      clearPreviousState();

      getMatchElements(searchFieldElement.value).forEach((matchRow) => {
         matchRow.classList.add('select')
      });

      searchFieldElement.value = "";
   }
}