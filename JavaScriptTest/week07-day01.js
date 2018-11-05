let num = 4;
const numberString = '3';
const rain = true;
let value = 42;


console.log(num);
console.log(typeof num, typeof numberString, typeof rain)

if( rain === true)
{
    console.log('Go inside!')
}
else 
{
    console.log('Stay outside!')
}
console.log("Modulus test for even" + num % 2 +'.');
num = 7;

var app = {

    isEven: function(input) {
        if (input % 2 === 0) {
            console.log('Your input of ' + input + ' is even.');
        } else {
            console.log('Your input of ' + input + ' is odd');
        }
    }
};


app.isEven(2);
app.isEven(3);
app.isEven(4);
app.isEven(5);

function evenOrOdd(value)
{
    if(value%2 === 0)
    {
        console.log ("this is even...");
    }
    else
    {
        console.log("This is odd...");
    }
};
evenOrOdd(150);
    
