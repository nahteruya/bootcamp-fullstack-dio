let array = [
  aluno1 = {
    nome: "Naomi",
    nota: 7
  },
  aluno2 = {
    nome: "Kaory",
    nota: 8,
  },
  aluno3 = {
    nome: "Izumi",
    nota: 5,
  }
];
console.log(array);

function selecionarAprovados(array) {
  let arrayAprovados = [];
  for(let i = 0; i < array.length; i++) {
    if(array[i].nota >= 7) {
      arrayAprovados.push(array[i]);
    }
  }
  return arrayAprovados;
}
console.log(selecionarAprovados(array));