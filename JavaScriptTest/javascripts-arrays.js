window.onload = () => {
    const showNumbers = document.getElementById("numbers-display");
    const numbersAction = document.getElementById("numbers-action");

    numbersAction.onclick = () => {
        for (let i = 0; i < arrays.length; i++) {
            console.log(arrays[i]);
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(arrays[i]));
            showNumbers.appendChild(li);

        }
    }
    const stringAction = document.getElementById("string-action");
    const showString = document.getElementById("string-display")
    stringAction.onclick = () => {
        for (let i = 0; i < progLanguages.length; i++) {
            const li = document.createElement("li");
            console.log(progLanguages[i]);
            li.appendChild(document.createTextNode(progLanguages[i]));
            showString.appendChild(li);
        }

    }



}

const arrays = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
const progLanguages = ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"];
progLanguages.sort();
const languagesPlus = ["JavaScript", "c++", "c#"];