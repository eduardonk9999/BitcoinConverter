// https://blockchain.info/ticker




const button = document.querySelector('button');
const form = document.querySelector('form');
const input = document.querySelector('.numberMany');
const symbol = document.querySelector(".symbol");
const valueBitcoin = document.querySelector('.valu-bitcoin');


form.addEventListener('submit', event => {
  event.preventDefault();

  const selected = event.target.options.value;
  const valueMany = Number(event.target.many.value);
  console.log(valueMany)

  fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(item => {
      const valueManyEnd = Number(item[`${selected}`].sell)
      const calcNumbers = String(valueMany / valueManyEnd)

      const numberFormated = calcNumbers.slice(7, -8)

      symbol.innerHTML = `${item[`${selected}`].symbol}`
      valueBitcoin.innerHTML = numberFormated
      console.log(item)
    })
})



// total dividido pelo biticoin