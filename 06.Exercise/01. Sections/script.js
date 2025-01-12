function create(words) {
   const contentDiv = document.getElementById('content');

   function createWordStructure(word) {
      const pEl = document.createElement('p');
      const divEl = document.createElement('div');

      pEl.textContent = word;
      pEl.style.display = 'none';
      divEl.append(pEl);
      return divEl;
   }

   words.forEach((word) => {
      const divEl = createWordStructure(word);
      contentDiv.append(divEl);
      divEl.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
         divEl.children[0].style.display = 'block';
      })
   });
}