let myMap = new Map();
myMap.set('Naomi','Admin');
myMap.set('Kaory', 'Usuário');
myMap.set('Izumi', 'Admin');
myMap.set('Megumi', 'Usuário');
myMap.set('Mayumi', 'Usuário');
myMap.set('Akira', 'Usuário');

function getAdmins(map) {
  let admsList = [];
  for(const pessoa of map.keys()) {
    if(map.get(pessoa) == 'Admin') {
      admsList.push(pessoa);
    }
  }
  return admsList;
}

console.log(getAdmins(myMap));