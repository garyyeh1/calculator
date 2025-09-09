

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