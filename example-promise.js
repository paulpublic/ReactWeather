// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("Error is thingy");
// }
//
// getTempCallback("Londen", function(err, temp){
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromis(location) {
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject("An error occured");
//     }, 1000)
//   });
// }
//
// getTempPromis('bla').then(function(temp){
//   console.log('promise', temp);
// }, function(err){
//   console.log('promise err', err);
// });



function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject("Should both be numbers")
    }
  });
}


addPromise(7,"ijij").then(function(n){
  console.log('number', n);
}, function(err){
  console.log('error', err);
});
