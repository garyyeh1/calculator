
// button animation
let numbers = document.querySelectorAll(".numbers button")

numbers.forEach(btn => btn.addEventListener('mouseover', myFunc));
function myFunc() {
  this.style.backgroundColor = 'orange';
  this.style.transform = 'scale(1.2)';
}

numbers.forEach(btn => btn.addEventListener('mouseout', myFunc2));
function myFunc2() {
  this.style.backgroundColor = "";
  this.style.transform = '';
}


let operations = document.querySelectorAll(".operations button")

operations.forEach(btn=> btn.addEventListener('mouseover', myFunc3));
function myFunc3(){
    this.style.backgroundColor = 'black';
    this.style.transform = 'scale(1.2)';
}

operations.forEach(btn=> btn.addEventListener('mouseout', myFunc4));
function myFunc4(){
    this.style.backgroundColor = '';
    this.style.transform = '';
}


let resetDisplay = false
let num1 = 0
let num2 = 0
let operator = null
result = 0
//making button work when clicked
let buttons = document.querySelectorAll(".numbers button:not(#result)")
let display = document.querySelector(".display")

buttons.forEach(btn=> btn.addEventListener('click', display1));
function display1(){
    if (display.textContent == ('0')){    
        display.textContent = this.textContent
    }else if (resetDisplay == true){
        display.textContent = this.textContent
        resetDisplay= false
    }
    else{
        display.textContent += this.textContent
    }

}



//operations
let operation = document.querySelectorAll(".operations button")

operation.forEach(btn=> btn.addEventListener('click', operating));
function operating(){
        num1 = Number(display.textContent)
    if (this.textContent =='+'){    
        display.textContent = '+'
        operator = '+'
        resetDisplay = true

    } else if (this.textContent == '-') {
        display.textContent = '-'
        operator = '-'
        resetDisplay = true
    } else if (this.textContent == 'x'){
        display.textContent = 'x'
        operator = 'x'
        resetDisplay = true    
    } else if (this.textContent == '/'){
        display.textContent = '/'
        operator = '/'
        resetDisplay = true
    }

}

document.querySelector("#result").addEventListener("click", equals);

function equals(){
    num2 = Number(display.textContent)
    console.log(num1, num2, operator)
    if (operator === '+'){
        result = num1 + num2
        display.textContent = result
    }else if (operator === '-'){
        result = num1 - num2
        display.textContent = result
    }else if (operator ==='x'){
        result = num1*num2
        display.textContent = result
    }else if (operator === '/'){
        result = num1/num2
        display.textContent = result
    }
}
