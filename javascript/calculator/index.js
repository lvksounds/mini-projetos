// https://www.freecodecamp.org/portuguese/news/como-construir-uma-calculadora-html-do-zero-usando-javascript/

// adicionando evento para ouvir as teclas 

const calculator = document.querySelector('#calculator'); 
const keys = calculator.querySelector('#calc-buttons');
const display = calculator.querySelector('#tela');


keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent; 
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType

        if(!action) { 
            if (displayedNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
            }
            else {
                display.textContent = displayedNum + keyContent;
            }
        }
            


        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }


        if (action === 'calculate') {
            console.log("equal key")
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            display.textContent = calculate(firstValue, operator, secondValue);
        }

        if (action === 'clear') {
            if (key.textContent === 'AC'){
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
              } else {
                key.textContent = 'AC'
              }

              display.textContent = 0
                calculator.dataset.previousKeyType = 'clear'
            }
        

        if(action === 'decimal') {
            display.textContent = displayedNum + '.';
        }
        // remove a classe is-depressed de todos as teclas
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
        
    }
})

const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2); 
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2); 
    } else if (operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2); 
    }

    return result
}


