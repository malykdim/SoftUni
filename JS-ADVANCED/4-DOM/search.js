function search() {
   const listItems = document.querySelectorAll('#towns>li');
   const input = document.querySelector('#searchText').value;
   const result = document.querySelector('#result');
   
   let sum = 0;
   for(let li of listItems) {
      if (li.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = 'none';
      }
   }
   
   result.textContent = `${sum} matches found`;
}

// 100/100
