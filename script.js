let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('number') || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (button.classList.contains('operator')) {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    calculate();
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (value === '=') {
            if (currentInput !== '' && previousInput !== '' && operator !== '') {
                calculate();
                operator = '';
            }
        } else if (value === 'C') {
            clear();
        }
    });
});

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    currentInput = result.toString();
    previousInput = '';
}

function clear() {
    display.value = '';
    currentInput = '';
    previousInput = '';
    operator = '';
}
