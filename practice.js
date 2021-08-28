//First Program
console.log('Abhijit Karmakar');
//Second 
prompt('What is you name? ');
//Third
var readLineSync = require('readline-sync');
var inputName = readLineSync.question('What colour do you love? ');
console.log(inputName);

//Fourth
var readLineSync = require('readline-sync');
var inputName = readLineSync.question('What colour do yourname ? ');
console.log('Welcome '+inputName);
console.log(`Welcome ${inputName}`);

//Fifth
var readLineSync = require('readline-sync');
var inputName = readLineSync.question('What is do your name ? ');
console.log('Welcome '+inputName);
console.log(`Welcome ${inputName}`);

//Sixth

var readLineSync = require('readline-sync');
var answer = readLineSync.question('Are you greater than 25 years ? ');

if(answer.toLowerCase() === 'yes'){
  console.log('Right');
}
else{
  conosle.log('Wrong')
}

//Seventh
{
  let x= 25;
}

console.log(x);    //gives reference error

//Eighth
{
  var x= 25;
}

console.log(x);  //won't give reference error


