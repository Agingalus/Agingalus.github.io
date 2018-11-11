window.onload = () => {
    const simpleFunction = document.getElementById('simple-function');
    const functionCalls = document.getElementById('function-calls');
    const functionReturn = document.getElementById('function-return')
    functionCalls.onclick = simple;
}

let words = "Many functions take parameters.";
let text = " Many functions return values.";

function simpleFunction() {
    console.log("Functions should consist of statements designed to perform a single task.")
}


function functionParamaters(words) {
    console.log(words);
}

function functionReturn() {
    return text;
}

function simple() {
    console.log('simple');
    simpleFunction.textContent = "simple";
}

simpleFunction();
functionParamaters(words);
console.log(functionReturn());