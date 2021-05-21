/*
  02

  - Exiba no console quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const under501 = crazyNumbers.filter(crazyNumbers => crazyNumbers < 501)

console.log(under501);
console.log(`Existem ${under501.length} números abaixo de 501 no array`);