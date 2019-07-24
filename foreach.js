  var colors = ['red', 'blue', 'white'];

colors.forEach(function(color){
    console.log(color);
}); 

// create an array of numbers
var numbers = [1,2,3,4,5];          

//create a variable to hold the sum
var sum = 0;
function adder(number){
    sum += number;
}
//loop over the aaray, incrementing the sum variable 
numbers.forEach(adder);
// print the sum variable
console.log(sum);

