var users =[
{ name:'ritu'},
{ name:'riya'},
{ name:'rinu'}
];

 var z = users.find(function(user) {
     return user.name === 'ritu';
 });console.log(z);

console.log(users.find(function(user) {
return user.name === 'riya';
}));
