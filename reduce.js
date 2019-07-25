var numbers = [20,50,30,10,0.5];
// var sum = 0;
// for (var i=0; i<numbers.length; i++){
//     sum = sum + numbers[i];
// }
// console.log(sum);

 console.log(numbers.reduce(function(initial , number) {
    return initial + number;}, 100));

//  console.log(Sum);
var colors =[
   { color: 'red' },
   { color: 'white' },
   { color: 'pink' }
];
  console.log(colors.reduce(function(color1 , color2)
  {color1.push(color2.color);
  return color1;  } , ['blue']));