function search() {
   const townsEls = document.querySelectorAll('#towns li');

   function getMatchElements (input) {
      return[...townsEls]
      .filter((x) => x.textContent.toLowerCase()
      .includes(input.toLowerCase()));
   }

   function clearPreviousState() {
      townsEls.forEach((el) => {
         el.style.fontWeight = 'normal';
         el.style.textContent = 'none';
      })
   }

   clearPreviousState();
   
   const [inputEl] = document.getElementsByTagName('input');
   const matchElements = getMatchElements(inputEl.value);
   matchElements.forEach((matchEl) => {
      matchEl.style.fontWeight = 'bold';
      matchEl.style.textDecoration = 'underline';
   })

   document.querySelector('div#result').textContent = `${matchElements.length} matches found`
}
