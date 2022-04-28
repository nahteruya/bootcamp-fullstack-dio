let naomi = { nome: "Naomi", idade: 21};
let kaory = { nome: "Kaory", idade: 23};
let anos = 7;
function calcularIdade(anos) {
  let display = 'Daqui a ' + anos + ' anos, ' + this.nome + ' terá ' + (this.idade+anos) + ' anos';
  return display;
}
console.log(calcularIdade.call(naomi, anos));
console.log(calcularIdade.apply(kaory, [anos]));