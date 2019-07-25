var computers =[
    {name:'hp' , ram: 35},
    {name:'blackberry' , ram: 34},
    {name:'dell' , ram: 26}
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