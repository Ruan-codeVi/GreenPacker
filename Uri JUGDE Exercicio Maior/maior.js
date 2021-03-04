var input = require('fs').readFileSync('stdin','utf8');
var [A,B,C ] = input.split(' ').map(item => Number(item));
const maiorAB = (A+B+Math.abs(A-B))/2;
const maiorNum = (C+maiorAB+Math.abs(C-maiorAB))/2;
console.log(`${maiorNum} eh o maior`);

// .map é para percorrer Array.
/*.map(item =>(item)), .map está percorrendo item por item no Array[A,B,C]
 e está fazendo a conversão para número de cada item do array*/ 