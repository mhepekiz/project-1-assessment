//Let's go

let result;

let inputNumber = document.getElementById('number');
let showResult = document.querySelector('h1');

//Event listener
function checkClick(){
    document.querySelector('#plus').addEventListener('click', calculate);
    document.querySelector('#minus').addEventListener('click', calculate);
    }

    // Functions
function init(){
    result = 0;
    render();
  }

  function calculate(e) {
      let operator = (e.target.id);
      let numA = parseInt(inputNumber.value);

    if (inputNumber.value !== '')  {
      if( operator === 'plus' ){   
      result = result + numA; }
      else if ( operator === 'minus'){
        result = result - numA; 
      }
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

