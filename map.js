var numbers = [1,2,3];
var d = [];
for(var i=0; i<numbers.length; i++){
    d.push(numbers[i] + 1 );
}
var b = numbers.map(function(number){
    return number + 1;
});
console.log(b);
console.log(d);

let a = new Map();
a.set("name","ritu");
a.set("age",22);
console.log(a.get("name"));
let ob1 = {};
a.set(ob1,11);
console.log(a.get(ob1));
a.delete("name");
a.clear();
console.log(a.size);
console.log(a.has("name"));

let myMap = new Map([["fname", "rituu"] , ["lname", "mahe"]]);
for (let value of myMap.values()){
    console.log(value);
}
for (let key of myMap.keys()){
    console.log(key);
}
for(let entry of myMap.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
for(let [key,value] of myMap.entries()){
    console.log(`${key} -> ${value}`);
}