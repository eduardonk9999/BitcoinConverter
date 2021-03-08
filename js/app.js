// https://blockchain.info/ticker




const button = document.querySelector('button');
const form = document.querySelector('form');
const input = document.querySelector('.numberMany');



form.addEventListener('submit', event => {
  event.preventDefault();

  const selected = event.target.options.value;


  // ACHO QUE O LANCE É FETCH COM PROMISSE
  // fetch('https://blockchain.info/ticker')
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(`${json.parse()}`)
  //   })
})



// total dividido pelo biticoin