window.onload = () => {
    simpleFunction = document.getElementById('simple-function');
    functionParamaters = document.getElementById('function-paramaters');
    functionReturn = document.getElementById('function-return')
    functionCalls = document.getElementById('function-calls')
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

    simpleFunction.textContent = "Functions should consist of statements designed to perform a single task";
    functionParamaters.textContent = words;
    functionReturn.textContent = text;

}

simpleFunction();
functionParamaters(words);
console.log(functionReturn());