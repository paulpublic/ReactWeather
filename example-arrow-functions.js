var names = ['paul', 'kees', 'diederik', 'jan'];
//
// names.forEach(function(name){
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log('=>', name)
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name+"!";
// console.log(returnMe('paul'));
//
// var person = {
//   name: 'Paul',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + " says hi " + name);
//     });
//   }
// };
//
// person.greet();


function add(a, b) {
  return a + b;
}

var addExpression = (a, b) => a + b;
var addStatement = (a, b) => {
  return a + b;
};

console.log(addExpression(1,3));
console.log(addStatement(9,0));
