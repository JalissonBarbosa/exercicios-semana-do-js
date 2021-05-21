/*
  06

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve ter a formatação exemplificada abaixo do array, considerando 
    inclusive o traço e o espaço antes de cada nome.

    ex:   

  - Nome 1
  - Nome 2
  - Nome 3
  
  Dica: para quebrar linha, você pode usar dentro da string o caractere 
  especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'Resident Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const cartNames = cart.map(cart => {
  return cart.name

})


console.log(`
- ${cartNames[0]}\n
- ${cartNames[1]}\n
- ${cartNames[2]}\n
- ${cartNames[3]}\n
- ${cartNames[4]}\n
`);
