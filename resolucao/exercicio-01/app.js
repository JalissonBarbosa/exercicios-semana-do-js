/*
  01

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba 
    o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const getOddNumber = (randomNumbers => randomNumbers %2)

const oddNumbers = randomNumbers.filter (getOddNumber)

console.log(oddNumbers);