/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const countNumbersUnder501 = (accumulator, crazyNumbers) => {
  if (crazyNumbers < 501) {
    accumulator += 1
  }

  return accumulator
}

const under501 = crazyNumbers.reduce(countNumbersUnder501,0)

console.log(under501);
