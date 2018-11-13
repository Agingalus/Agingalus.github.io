window.onload = () => {
    const feetToInchesAction = document.getElementById('feet-to-inches-action');
    const milesToFeetAction = document.getElementById('miles-to-feet-action');
    const areaOfTriangleAction = document.getElementById('area-of-triangle-action');
    const areaOfCircleAction = document.getElementById('area-of-circle-action');
    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feet-to-inches-input');
        const feetToInchesDisplay = document.getElementById('feet-to-inches-display');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
    milesToFeetAction.onclick = () => {
        const milesToFeetImput = document.getElementById('miles-to-feet-input');
        const milesToFeetDisplay = document.getElementById('miles-to-feet-display');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetImput.value);
    };
    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleImput1 = document.getElementById('area-of-triangle-input1');
        const areaOfTriangleImput2 = document.getElementById('area-of-triangle-input2');
        const areaOfTriangleDisplay = document.getElementById('area-of-triangle-display');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleImput1.value, areaOfTriangleImput2.value);
    };
    areaOfCircleAction.onclick = () => {
        const areaOfCircleImput = document.getElementById('area-of-circle-input');
        const areaOfCircleDisplay = document.getElementById('area-of-circle-display');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleImput.value);
    };

}

function feetToInches(feet) {
    return feet * 12;
}

function milesToFeet(miles) {
    return miles * 5280;
}

function areaOfTriangle(base, hight) {
    return base * hight / 2;
}

function areaOfCircle(radius) {
    return radius * radius * Math.PI;
}