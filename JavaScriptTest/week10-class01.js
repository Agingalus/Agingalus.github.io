window.onload = () => {
    const objectLiteralAction = document.getElementById("object-literal-action");
    objectLiteralAction.onclick = () => {
        const objectLiteralDisplay = document.getElementById("object-literal-display")
        displayString = "You have clicked somting, oh no!";
        console.log(displayString);
        objectLiteralDisplay.textContent = objectLiteral.getName();


    }
    const numbersAction = document.getElementById("numbers-action");
    numbersAction.onclick = () => {
        const numbersDisplay = document.getElementById("numbers-display");
        for (let number of numbers) {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(number));
            numbersDisplay.appendChild(li);

            numbersDisplay.textContent = numbers;
        }


        //numbersDisplay.textContent = numbers;
    }
}
const objectLiteral = {
    myName: "Object literal is my name",
    getName: function() {
        return this.myName;
    }
}

const numbers = [2, 1, 3];
//const sorted = numbers.sort();
console.log(sorted); // [ 1, 2, 3 ]
console.log(numbers); // [ 1, 2, 3 ]