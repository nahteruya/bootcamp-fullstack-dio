let string = "casa";
console.log(string.length);
let array = [0,1,2,3,4,5,6];

function transformArray(array) {
  if(!array) return -1;
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
      array[i] = 0;
    } else {
      array[i] = array[i];
    } 
  } 
  return array;
}
console.log(transformArray(null));
console.log(transformArray(undefined));
console.log(transformArray(array));


