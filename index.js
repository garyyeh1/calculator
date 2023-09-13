function add(a,b){
    clone()
    let newClick = document.createElement('div')
    newClick.textContent = "+";
    history.appendChild(newClick);

    answer = a+b
    return answer
}

function subtract(a,b){
    a = prompt("choose first number")
    b = prompt('choose second number')
    answer = a-b
    return answer
}
function multiply(a,b){
    a = prompt("choose first number")
    b = prompt('choose second number')
    answer = a*b
    return answer
}

function division(a,b){
    a = prompt("choose first number")
    b = prompt('choose second number')
    answer = a/b
    console.log(answer)
}


function operate(operator){
    if (operator == 'add'){
        add()
        screenContent(answer)
    }else if (operator == 'subtract'){
        subtract()
    }else if (operator == 'divide'){
        division()
    }else if (operator == 'multiply'){
        multiply()
    }

}

/*equal button */
let equals = document.getElementById('equals')
equals.addEventListener('click', function(){operate()})



/*to display on screen for eveyr button pressed*/
let output = document.getElementById('screen-current')

/*to display the history screen once any operator is pressed*/
let history = document.getElementById('screen-last')
function clone(){   
    let copy = output.cloneNode(true)
    copy.id = 'screen-last'
    history.appendChild(copy, output) 
}


function screenContent(numbers){
    let newClick = document.createElement('div')
    newClick.textContent = numbers;
    output.appendChild(newClick);
}

function resetNodes(){
    while (output.hasChildNodes()){
        output.removeChild(output.firstChild)
    }
}



function clearCurrentInput(){
    if (needReset){
        while(output.hasChildNodes()){
            output.removeChild(output.firstChild)}
            
    }
    resetNodes()
}


/*buttons for operating**/
let add1 = document.getElementById('add')
add1.addEventListener('click', function(){operate('add')})

let subtract1 = document.getElementById('subtract')
subtract1.addEventListener('click', function(){operate('subtract')})

let multiply1 = document.getElementById('multiply')
multiply1.addEventListener('click', function(){operate('multiply')})

let divide1 = document.getElementById('divide')
divide1.addEventListener('click', function(){operate('divide')})

/*to get the buttons to work*/

let seven = document.getElementById('seven')
seven.addEventListener('click', function(){showSeven()})
function showSeven(){
    screenContent(7)

}

let four = document.getElementById('four')
four.addEventListener('click', function(){showFour()})
function showFour(){
    screenContent(4)
}


let one = document.getElementById('one')
one.addEventListener('click', function(){showOne()})
function showOne(){
    screenContent(1)
}

let dot = document.getElementById('dot')
dot.addEventListener('click', function(){showDot()})
function showDot(){
    screenContent('.')
}

let eight = document.getElementById('eight')
eight.addEventListener('click', function(){showEight()})
function showEight(){
    screenContent(8)
}

let five = document.getElementById('five')
five.addEventListener('click', function(){showFive()})
function showFive(){
    screenContent(5)
}

let two = document.getElementById('two')
two.addEventListener('click', function(){showTwo()})
function showTwo(){
    screenContent(2)
}

let zero = document.getElementById('zero')
zero.addEventListener('click', function(){showZero()})
function showZero(){
    screenContent(0)
}

let nine = document.getElementById('nine')
nine.addEventListener('click', function(){showNine()})
function showNine(){
    screenContent(9)
}

let six = document.getElementById('six')
six.addEventListener('click', function(){showSix()})
function showSix(){
    screenContent(6)
}

let three = document.getElementById('three')
three.addEventListener('click', function(){showThree()})
function showThree(){
    screenContent(3)
}

let d = document.getElementById('deleted')
d.addEventListener('click', function(){gotdeleted()})
function gotdeleted(){
    output.removeChild(output.lastChild)
}


let clearing = document.getElementById('clear')
clearing.addEventListener('click', function(){clearing1()})
function clearing1(){
    while (output.hasChildNodes()){
        output.removeChild(output.firstChild)
    }
}

