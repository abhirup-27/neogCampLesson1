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

var readLineSync = require('readline-sync');
var answer = readLineSync.question('Am I from bokaro ? ');
var counter = 0;
if(answer.toLowerCase() === 'yes'){
  console.log('Right');
  counter = counter+1;
}
else{
  conosle.log('Wrong');
  counter = counter-1;
}
console.log(counter);

//eights

function sumOfTwo(a,b){
    return a+b;
}
var readLineSync = require('readline-sync');
var answer = readLineSync.question('Input two numbers to be added seperated by a , : ');
var arrayOfNumber = new Array();
arrayOfNumber = answer.split(',');
console.log(arrayOfNumber)
var sumOfTwo = sumOfTwo(parseInt(arrayOfNumber[0]),parseInt(arrayOfNumber[1]))
console.log(sumOfTwo);


//ninth