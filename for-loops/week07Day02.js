const result = 1+2*3;
var showMessage =(message) =>{
    console.log("_______________________");
    console.log("       " + message);
    console.log("_______________________");

}
let done = 0;

console.log(result);

showMessage("this is a for loop");
for(let i=10; i > 0; i--)
{
    console.log("Blast off in ", i);
    

}


showMessage("hello pal");
showMessage("I can count!");

for(i=1;i <=10; i++)
{
    console.log(i);
}
showMessage("We can do While loops!")

while( done < 3)
{
    console.log("Ha Ha");
    done++;
    
    
}