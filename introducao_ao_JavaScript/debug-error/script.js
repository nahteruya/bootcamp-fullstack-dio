let array = [0,1,2,3,4];
let number = 5;

function validacaoArray(array, numb) {
  try {
    if(!array && !numb) {
      throw new ReferenceError('Insira os parametros na função!');
    }
    if (typeof array !== 'object') {
      throw new TypeError('Sua array não é um objeto!');
    } 
    if (typeof numb !== 'number') {
      throw new TypeError('Seu número não é do tipo number!');
    }
    if (array.length !== numb) {
      throw new RangeError('O número não é igual ao tamanho da array.')
    }
    return array;
  }
  catch(e) {
    if(e instanceof ReferenceError) {
      console.log("ReferenceError!");
      console.log(e.stack);
    } else if(e instanceof RangeError) {
      console.log("RangeError!");
      console.log(e.stack);
    } else {
      console.log("Outro erro: " + e);
    }
  }
}

console.log(validacaoArray(array,array));