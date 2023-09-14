function add(){
    viewHistory()
    let newClick = document.createElement('div')
    newClick.textContent = "+";
    history.appendChild(newClick);
}

function subtract(){
    viewHistory()
    let newClick = document.createElement('div')
    newClick.textContent = "-";
    history.appendChild(newClick);

}
function multiply(){
    viewHistory()
    let newClick = document.createElement('div')
    newClick.textContent = '×';
    history.appendChild(newClick);
 
}

function division(){
    viewHistory()
    let newClick = document.createElement('div')
    newClick.textContent = "÷";
    history.appendChild(newClick);

}



function operate(){
    let b = Number(output.innerHTML)
    let a = Number(history.childNodes[0].textContent)


    if (history.firstElementChild.textContent == '+'){
        let c = Number(a) + Number(b)
        console.log(c)
        

    }else if (history.firstElementChild.textContent == '-'){
        let c = Number(a) - Number(b)
        console.log(c)

    }else if (history.firstElementChild.textContent == '÷'){
        let c = Number(a)/Number(b)
        console.log(c)


    }else if (history.firstElementChild.textContent == '×'){
        let c = Number(a)*Number(b)
        console.log(c)
    }
    needReset = true
    clearCurrentInput()

}

/*equal button */
let equals = document.getElementById('equals')
equals.addEventListener('click', function(){operate()})



/*to display on screen for eveyr button pressed*/
let output = document.getElementById('screen-current')

/*to display the history screen once any operator is pressed*/
let history = document.getElementById('screen-last')
function viewHistory(){   
    let ccc = array.join('')
    history.textContent = ccc
    needReset= true

    
}

let array = []
function arr (numbers){
    let aaa = Array.from(output.querySelectorAll('div'))
    array.push(numbers)
    let ccc = array.join('')
    output.textContent = ccc

}




needReset = false
function clearCurrentInput(){
    if (history.hasChildNodes() && needReset){
        array = []}
    needReset = false
}


/*buttons for operating**/
let add1 = document.getElementById('add')
add1.addEventListener('click', function(){add()})

let subtract1 = document.getElementById('subtract')
subtract1.addEventListener('click', function(){subtract()})

let multiply1 = document.getElementById('multiply')
multiply1.addEventListener('click', function(){multiply()})

let divide1 = document.getElementById('divide')
divide1.addEventListener('click', function(){division()})

/*to get the buttons to work*/

let seven = document.getElementById('seven')
seven.addEventListener('click', function(){showSeven()})
function showSeven(){
    clearCurrentInput()
    arr(7)

}

let four = document.getElementById('four')
four.addEventListener('click', function(){showFour()})
function showFour(){
    clearCurrentInput()
    arr(4)
}


let one = document.getElementById('one')
one.addEventListener('click', function(){showOne()})
function showOne(){
    clearCurrentInput()
    arr(1)}

let dot = document.getElementById('dot')
dot.addEventListener('click', function(){showDot()})
function showDot(){
    clearCurrentInput()
    arr('.')}

let eight = document.getElementById('eight')
eight.addEventListener('click', function(){showEight()})
function showEight(){
    clearCurrentInput()
    arr(8)}

let five = document.getElementById('five')
five.addEventListener('click', function(){showFive()})
function showFive(){
    clearCurrentInput()
    arr(5)}

let two = document.getElementById('two')
two.addEventListener('click', function(){showTwo()})
function showTwo(){
    clearCurrentInput()
    arr(2)}

let zero = document.getElementById('zero')
zero.addEventListener('click', function(){showZero()})
function showZero(){
    clearCurrentInput()
    arr(0)}

let nine = document.getElementById('nine')
nine.addEventListener('click', function(){showNine()})
function showNine(){
    clearCurrentInput()
    arr(9)}

let six = document.getElementById('six')
six.addEventListener('click', function(){showSix()})
function showSix(){
    clearCurrentInput()
    arr(6)}

let three = document.getElementById('three')
three.addEventListener('click', function(){showThree()})
function showThree(){    
    clearCurrentInput()
    arr(3)}

let deletee = document.getElementById('deleted')
deletee.addEventListener('click', function(){gotdeleted()})
function gotdeleted(){
    const arrays = array.pop(-1)
    let aaa = Array.from(output.querySelectorAll('div'))
    let ccc = array.join('')
    output.textContent = ccc

}


let clearing = document.getElementById('clear')
clearing.addEventListener('click', function(){clearing1()})
function clearing1(){
    output.textContent = ''
    history.textContent = ''
    array = []
}