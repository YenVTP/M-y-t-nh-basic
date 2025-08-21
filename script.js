const screen = document.getElementById('screen');

function appendToScreen(value) {
    if (screen.innerText === '0') {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}


function clearScreen() {
    screen.innerText = '0';
}


function deleteLast() {
    if (screen.innerText.length === 1) {
        screen.innerText = '0';
    } else {
        screen.innerText = screen.innerText.slice(0, -1);
    }
}


function calculateResult() {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = 'Error';
    }
}
