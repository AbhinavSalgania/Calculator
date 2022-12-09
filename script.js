let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let value = '';

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalTo = document.querySelector('.result');
const clear = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', addDecimal);

numbers.forEach(button => button.addEventListener('click', show));
operators.forEach(button => button.addEventListener('click', show));
decimal.addEventListener('click', show);

function show(e) 
{
    if (e.target.classList.contains('number')) 
    {
        if (operator === '') {
            firstNumber += e.target.textContent;
            display.textContent = firstNumber;
        } 
        else
        {
            secondNumber += e.target.textContent;
            display.textContent = firstNumber + operator + secondNumber;
        }
    } 

    else if (e.target.classList.contains('operator'))
    {
        {
            if (secondNumber === '')
            {
                value += firstNumber;
                operator = e.target.textContent;
                value += operator;
                display.textContent = firstNumber + operator;
            } 
            else if (secondNumber !== '')
            {
                evaluate();
                operator = e.target.textContent;
                value = result + operator;
                display.textContent = value;
            }
            
        }
    }
}

equalTo.addEventListener('click', evaluate);
clear.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteLast);

function evaluate() 
{
    result = operate(parseInt(firstNumber), parseInt(secondNumber), operator);
    display.textContent = result;
    firstNumber = result;
    secondNumber = '';
    operator = '';
    value = '';
}

function clearDisplay() 
{
    display.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    value = '';
}

function deleteLast() 
{
    value = value.slice(0, -1);
    display.textContent = value;
    if (operator === '') 
    {
        firstNumber = firstNumber.slice(0, -1);
    } else 
    {
        secondNumber = secondNumber.slice(0, -1);
    }
}

function addDecimal() 
{
    if (operator === '') 
    {
        if (firstNumber.includes('.')) 
        {
            return;
        } else
        {
            firstNumber += '.';
        }
    } 
    else 
    {
        if (secondNumber.includes('.')) 
        {
            return;
        } 
        else 
        {
            secondNumber += '.';
        }
    }
}

// display funny message when user tries to divide by zero

function divideByZero() 
{
    alert("Come On! You are not that stupid! You are better than this!");
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    value = '';
}



// basic functions for the calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// function to operate

function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        if (b === 0) {
            divideByZero();
        } else {
            return divide(a, b);
        }
    }
}

function handleKeyPress(e) {
    if (e.key >= 0 && e.key <= 9) { show(e);}
    if (e.key === '.') { addDecimal(e);}
    if (e.key === 'Enter') { evaluate(e);}
    if (e.key === 'Backspace') { deleteLast(e);}
    if (e.key === 'Escape') { clearDisplay(e);}
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') { show(e);}
}

document.addEventListener('keydown', handleKeyPress);
        






     
        