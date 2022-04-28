/* Solução 1 */
let string = "osso";
let array = string.split('');
let arrayReverse = array.reverse();
let stringReverse = array.join('');

if (string === stringReverse) {
  console.log('é um palíndromo');
} else {
  console.log('não é um palíndromo');
}




