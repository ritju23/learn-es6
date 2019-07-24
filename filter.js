
let  products = [
    [ "mango" , "fruit" ],
    [ "pineaple" , "fruit" ],
    [ "brokely" , "vegetable" ]  
]; 
var filteredProducts = [];
 products.filter(function(product){
    return product.filter === "fruit"});
    filteredProducts.push(products);
console.log(filteredProducts);

const numbers = [1,2,-7,0,-1.2,1.3];
const filtered = numbers.filter(value => {return value >= 0;});
console.log(filtered);

const people = [
    { name: 'sunny', age: 32},
    { name: 'Ishika', age: 18},
    { name: 'Washim', age: 10},
    { name: 'Annu', age: 22}
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);