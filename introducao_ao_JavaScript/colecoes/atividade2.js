let array = [30, 30, 40, 5, 223, 2049, 3034, 5];
let mySet = new Set();

for (let i = 0; i < array.length; i++) {
  if (!mySet.has(array[i])) {
    mySet.add(array[i]);
  }
}

console.log(mySet);