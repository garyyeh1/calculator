
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

//making button work when clicked
let buttons = document.querySelectorAll(".numbers button")
let display = document.querySelector(".display")

buttons.forEach(btn=> btn.addEventListener('click', display1));
function display1(){
    if (display.textContent == 0){    
        display.textContent = this.innerHTML
    } else{
        display.textContent += this.textContent
    }
}

//operations
let operation = document.querySelectorAll(".operations button")

operation.forEach(btn=> btn.addEventListener('click', operating));
function operating(){
    if (operation.textContent ==='+'){    
        const num1 = display.textContent
        this.textContent.replace(display.textContent)

    } else if (operation.textContent == '-') {
        
    } else if (operation.textContent== 'x'){
        //multiply
    } else {
        //divide
    }

}