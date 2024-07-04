const numberButton = document.querySelectorAll('.number')
const operandButton = document.querySelectorAll('.operand')
const equalsButton = document.querySelector('.equals')
const clearButton = document.querySelector('.clear')
const decimalButton = document.querySelector('.decimal')
const backspaceButton = document.querySelector('.backspace')
const sumScreen = document.querySelector('.sumScreen')
const resultScreen = document.querySelector('.resultScreen')


let firstNumber =''
let secondNumber =''
let operand =''


equalsButton.addEventListener('click', operate)

numberButton.forEach(el => el.addEventListener('click', e => {

    if(resultScreen.textContent == ''){
        if (operand == ''){
            firstNumber += e.target.textContent
        }
        else if (firstNumber !== '' || operand !== ''){
            secondNumber += e.target.textContent
        }
    sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
    }
    else if (resultScreen.textContent !== ''){
        clear()
        firstNumber += e.target.textContent
        sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
    }
  }));

operandButton.forEach(el => el.addEventListener('click', e => {
    if (secondNumber !=='' && resultScreen.textContent == ''){
        return
    }
    if(resultScreen.textContent == ''){
        if (firstNumber !== ''){
            operand = e.target.textContent
        }
        sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
    }
     else if(resultScreen.textContent !==''){
        firstNumber =resultScreen.textContent
        secondNumber =''
        operand = e.target.textContent
        resultScreen.textContent = ''
        sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
    } 
}))

decimalButton.addEventListener('click', () =>{
    if(operand == '' && firstNumber.includes('.')){
        return
    }
    if(secondNumber.includes('.')){
        return
    }
    if (firstNumber == ''){
        firstNumber += '0.'
    }    
    if (secondNumber == '' && operand !==''){
        secondNumber += '0.'
    }
    if (operand =='' && firstNumber.includes('.')==false){
        firstNumber += '.'
    }
    if (operand !== '' && secondNumber.includes('.')==false){
        secondNumber += '.'
    }
    sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
})

backspaceButton.addEventListener('click', ()=>{
    if(secondNumber !==''){
        secondNumber = secondNumber.slice(0,-1)
    }
    else if(secondNumber =='' && operand !==''){
        operand = ''
    }
    else if(operand =='' & firstNumber !==''){
        firstNumber = firstNumber.slice(0,-1)
    }
    sumScreen.textContent = `${firstNumber} ${operand} ${secondNumber}`
})

clearButton.addEventListener('click', clear)


function operate(){
    if(operand =='÷' && secondNumber =='0'){
        alert("You can't divide by zero!")
        return
    }
    firstNumber=Number(firstNumber)
    secondNumber=Number(secondNumber)
    operand == '+'? add():
    operand == '-'? subtract():
    operand == 'x'? multiply():
    operand == '÷'? divide():
    operand == '%'? percent():
    console.log()
    return
}

function add(){
    resultScreen.textContent = firstNumber+secondNumber
}

function subtract(){
    resultScreen.textContent = firstNumber-secondNumber
}

function multiply(){
    resultScreen.textContent = firstNumber*secondNumber
}

function divide(){
    resultScreen.textContent = (Math.round((firstNumber/secondNumber)*10000)/10000)
}

function percent(){
    resultScreen.textContent = (Math.round(((firstNumber/100)*secondNumber)*10000)/10000)
}

function clear(){
    firstNumber =''
    secondNumber =''
    operand =''
    resultScreen.textContent = ''
    sumScreen.textContent = ''
    return
}



