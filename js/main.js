//Let's go

let result;

let inputNumber = document.getElementById('number');
let showResult = document.querySelector('h1');

//Event listener
function checkClick(){
    document.querySelector('#plus').addEventListener('click', calculatePlus);
    document.querySelector('#minus').addEventListener('click', calculateMinus);
    }

    // Functions
function init(){
    result = 0;
    render();
  }

  function calculatePlus() {
    if (inputNumber.value !== '')  {
      let numA = parseInt(inputNumber.value);
      result = result + numA;
      render();
    }
  }

  function calculateMinus() {
    if (inputNumber.value !== '')  {
      let numA = parseInt(inputNumber.value);
      result = result - numA;
      render();
    }
  }


function render(){
    checkClick();
    if(result < 0){ showResult.style.color = '#ff0000'; }
    inputNumber.value = 1;
    showResult.textContent = result;
}
init();

