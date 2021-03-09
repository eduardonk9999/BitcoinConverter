// https://blockchain.info/ticker




const button = document.querySelector('button');
const form = document.querySelector('form');
const input = document.querySelector('.numberMany');



form.addEventListener('submit', event => {
  event.preventDefault();

  const selected = event.target.options.value;

  



  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(item => {
      console.log(item[`${selected}`].last)

      

     
    // console.log(JSON.stringify(item))

    // const t = item;
    // console.log(t)
    // const teste = t + '.' + 'USD'
    // console.log(teste)

    //  const { last } = 
      
    //  console.log(last)
    })
})



// total dividido pelo biticoin