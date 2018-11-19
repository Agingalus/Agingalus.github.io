window.onload = () => {
    const displayFullName = document.getElementById("fullName");
    const getFullName = document.getElementById("full-name")
    getFullName.onclick = () => {
        displayFullName.textContent = myObject.fullName();
    }
    const getNamesButton = document.getElementById("get-names");
    const displayName = document.getElementById("name");
    getNamesButton.onclick = () => {
        displayName.textContent = myObject.getname();
    }
    const action = document.getElementById("simple-object-action");
    const displaySimple = document.getElementById("simple-object-display");
    action.onclick = () => {
        displaySimple.textContent = simpleObject.sayName();
    }
    const action1 = document.getElementById("function-object-action");
    const displayFunction = document.getElementById("function-object-display");
    action1.onclick = () => {
        displayFunction.textContent = FunctionObject();
    }
    const action2 = document.getElementById("custom-class-action");
    const displayClass = document.getElementById("custom-class-display");
    action2.onclick = () => {
        displayClass.textContent = custom.sayName();
    }


}




const myObject = {
    firstName: "aaron",
    lastName: "greene",
    getname: function() {
        return this.firstName + " " + this.lastName;
    }
}
myObject.middleName = "yitzhak";
myObject.fullName = function() {
    return this.firstName + " " + this.middleName + " " + this.lastName;
}
console.log(myObject.firstName + " " + myObject.lastName);
console.log(myObject.getname());
console.log(myObject.middleName);
console.log(myObject.fullName());

// const functionObject = new FunctionObject
// const FunctionObject = () => {
//     console.log("my function object");
//     const getName = () => {
//         return "Function Object";

//     }
//     console.log(getName());
//     functionObject.prototype.getFullName = () => {
//         return "hi";
//     }
// }
// functionObject();
// console.log(getFullName());


simpleObject = {
    sayName: function() {
        console.log("Simple Object");
        return "Simple Object";
    }
}
simpleObject.dynamicMethod = function() {
    console.log("Dynamic Method");
    return "Dynamic Method";
}

function FunctionObject() {
    sayName = function() {
        console.log("Private Function")
        return "Private Function";
    }
    return sayName();
}
class CustomClass {
    sayName() {
        console.log("Custom Class")
        return "Custom Class";
    }


}
custom = new CustomClass;