//Exercise 1
//Create a function that adds up the integers in the following array.

//var numbers = [10, 20, 30, 40, 50];
//
//function addNumbers(numberArray) {
//    var result = 0;
//    for(var i = 0; i < numbers.length; i++) {
//        result = result + numberArray(i)
//    }
//}


//function addNumbers(numberArray) {

//}

//for(var i = 0; i < Array.length; i++) {
//    arrary[i] + arrary[i+2];
//}

//solution without for loop, using reduce method

//console.log(
//    [1, 2, 3, 4].reduce(function(a, b) {
//        return a + b
//    }, 0)
//)


//Ex.3 Impliment FizzBuzz
for(var i = 1; i <= 100; i++) {
    if (i % 15 == 0) console.log("fizzbuzz");
    else if (i % 3 == 0) console.log("fizz");
    else if (i % 5 == 0) console.log("buzz");
    else console.log(i);
}




//Ex.4 Challenge 
//1 possibility - not working right - troubleshoot
//for (let i = 0; i <= 5; i++) {
//    for (let j = 1; j <= i; j++) {
//        console.log('*')
//    }
//    console.log('\n')
//}

//2nd possibility
//for (let i = 0; i <= 5; i++) {
//    console.log('*'.repeat(i))
//}