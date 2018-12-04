var person = {
    fistName: "Aaron",
    lastName: "Greene",
    fullName: function() {
        return this.fistName + " " + this.lastName;
    }
};
var calculator = {
    operand01: -1,
    operand02: -1,
    add: function() {
        return this.operand01 + this.operand02;
    },
    subtract: function() {
        return this.operand01 - this.operand02;
    },
    multiply: function() {
        return this.operand01 * this.operand02;
    }
};


function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}



divider("Person");

console.log("First name: " + person.fistName);
console.log("Last name: " + person.lastName);
console.log("Full name: " + person.fullName());

divider("Calculator");

calculator.operand01 = person.fistName.length;
calculator.operand02 = person.lastName.length;

console.log("Operand01: " + calculator.operand01);
console.log("Operand02: " + calculator.operand02);
console.log("Add: " + calculator.add());
console.log("Subtract: " + calculator.subtract());
console.log("Multiply: " + calculator.multiply());