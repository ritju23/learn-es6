var computers =[
    {name:'hp' , ram: 32},
    {name:'blackberry' , ram: 64},
    {name:'dell' , ram: 16}
];


console.log(computers.every(function(computer)
 { return computer.ram > 16;}  
));

console.log(computers.some(function(computer)
 { return computer.ram > 16;}  
));

console.log(computers.every(function(computer)
 { return computer.name.length > 4;}  
));
console.log(computers.some(function(computer)
 { return computer.name.length > 4;}  
));