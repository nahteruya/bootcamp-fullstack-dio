var decrementBtn = document.getElementById('subtrair');
var incrementBtn = document.getElementById('adicionar');
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
disableBtn(currentNumber);

function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  /* changeColor(currentNumber); */
  disableBtn(currentNumber);
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  /* changeColor(currentNumber); */
  disableBtn(currentNumber);
}

/* function changeColor(currentNumber) {
  if (currentNumber < 0) {
    currentNumberWrapper.style.color = 'red';
  } else {
    currentNumberWrapper.style.color = 'black';
  }
} */

function disableBtn(currentNumber) {
  if (currentNumber <= 0) {
    decrementBtn.style.display = 'none';
    incrementBtn.style.display = 'initial';
  } else if (currentNumber > 0 && currentNumber < 10){
    decrementBtn.style.display = 'initial';
    incrementBtn.style.display = 'initial';
  } else {
    decrementBtn.style.display = 'initial';
    incrementBtn.style.display = 'none';
  }
}
 