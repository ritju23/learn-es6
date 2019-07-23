// if else
function A (name){
    let a;
    if( name === "true"){
    a = "hello ritu";  
    } 
    else {
     a = "who are you?";
    }
console.log(a) ;}
A("true");

var x=1; 
var y=2;
if (x === 1){
    var x=10;
    let y=20;
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y);

// for loop
for (let i=1; i<=5; i++){
   setTimeout(function(){console.log(i);},1000);
}