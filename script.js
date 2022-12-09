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

numbers.forEach(button => button.addEventListener('click', show));
operators.forEach(button => button.addEventListener('click', show));

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

clear.addEventListener('click', clearDisplay);

equalTo.addEventListener('click', (e) =>
{
    if (firstNumber === '' && secondNumber === '' && operator === '') 
    {
        display.textContent = 0;
    } 
    else if (firstNumber !== '' && secondNumber === '' && operator === '') 
    {
        display.textContent = firstNumber;
    } 
    else if (firstNumber !== '' && secondNumber === '' && operator !== '') 
    {
        display.textContent = firstNumber;
    } 
    else if (firstNumber !== '' && secondNumber !== '' && operator !== '') 
    {
        evaluate();
    }
});

function evaluate() 
{
    result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
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

// display funny message when user tries to divide by zero

function divideByZero() 
{
    alert("Come On! You are not that stupid! You are better than this!");
    display.textContent = 0;
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

// round the result to 3 decimal places
function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
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

/*// add keyboard support and use other functions to make it work

window.addEventListener('keydown', handleKeyboard);

function handleKeyboard(e)
{
    if (e.key >=0 && e.key <=9)
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
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
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
    else if (e.key === 'Enter')
    {
        if (firstNumber === '' && secondNumber === '' && operator === '') 
        {
            display.textContent = 0;
        } 
        else if (firstNumber !== '' && secondNumber === '' && operator === '') 
        {
            display.textContent = firstNumber;
        } 
        else if (firstNumber !== '' && secondNumber === '' && operator !== '') 
        {
            display.textContent = firstNumber;
        } 
        else if (firstNumber !== '' && secondNumber !== '' && operator !== '') 
        {
            evaluate();
        }

    }
    else if (e.key === 'Backspace')
    {
        clearDisplay();

    }
}
/*


/*


function addDecimal()
{
    firstNum = firstNumber.toString();
    secondNum = secondNumber.toString();
    if (operator === '') 
    {
        if (firstNum.includes('.'))
        {
            return;
        } 
        else if ( firstNum === '' )
        {
            firstNum = '0.';
            display.textContent = firstNum;
        }
        else
        {
            firstNum += '.';
            display.textContent = firstNum;
        }
    }
    else if (operator !== '')
    {
        if (secondNum.includes('.'))
        {
            return;
        }
        else if (secondNum === '')
        {
            secondNum = '0.';
            display.textContent = secondNum + operator + secondNum;
        }
        else
        {
            secondNum += '.';
            display.textContent = firstNum + operator + secondNum;
        }
    }
}*/
