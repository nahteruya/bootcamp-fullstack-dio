/* Exercício 1 */
let array = [0,1,2,3,4];

let soma = array.reduce(function(acum, item) {
  return acum + item;
});

console.log(soma);

/* Exercício 2 */
function calcularSaldoFinal(listaGastos, saldoAtual) {
  let gastos = listaGastos.reduce((acum, item) => acum + item);
  let saldoFinal = saldoAtual - gastos;
  return saldoFinal;  
}
console.log(calcularSaldoFinal(array, 25));
