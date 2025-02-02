/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up!🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*
Task 1 - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

*/
let votingAge=20
if (votingAge>=18){
   console.log("ture")
}


/*
Task 2 - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

*/
let a=10
let b=10
if(a=b){
   console.log(20)
}




/*
Task 3 - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let x="1999"
let y=parseInt(x)
console.log(y)
console.log(typeof (y)) 


/*
Task 4 - Mood Checker

Do the following:   
   1. Write a script that prompts the user for their current mood. 
   2. If the user inputs happy, print 'Yay me too!' to the console, sad print 'Aw cheer up',
   3. Else just print 'So moody!'

*/
/*


Task 5 - Odd or Even

Use conditionals to check if a hardcoded number is odd or even, and then console.log the number is odd or even with the numbers value.

*/

var num; 3// write a number here

// write your conditions here
if(num%2==0){
   console.log("number is even")
}

else{
  console.log("number is odd")
}

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 FIZZBUZZ 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*

You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. 
It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. 
But you won't be one of those people. Here are the rules for the assignment:

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

The one hint you'll likely need is:

There is a Javascript operator called "remainder" but often referred to as "modulus" or "modulo". 
It is represented by the percentage sign (%) and it gives you the remainder left over after division. So for example:

 6 % 3

Equals zero. Because after dividing 6 by 3, there is zero leftover. Whereas:

6 % 4

Equals 2. Because after dividing 6 by 4, there are 2 left over from the six.

If that was confusing, don't worry. It will make more sense as you use it. 
The point is: the remainder operator is useful for finding out if X is a multiple of Y. If it is, then X % Y will yield zero. 
Knowing this should help you complete this assignment without any issue.


Extra Credit:

Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". 
You should print this whenever you encounter a number that is prime (divisible only by itself and one).
As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. 
It's okay for it to be slow.


*/
//1. you can make fizbuzz using this way:

for(let i=0; i<=100;  i++){
   if(i%3==0 && i%5){
      console.log("FizBuzz")
   }
   else if( i%3==0){
      console.log("Fizz")
   }
   else if(i%5==0){
      console.log("Buzz")
   }

   else{
      console.log(i)
   }
}


//2.another way that you make fizbuzz
/*for(var i=0; i<=100; )
var output="";

if(i%3==0){output += "Fizz"}
if(i%5==0){output += "Buzz"}

if(output== ""){output = i;}

console.log(output)*/



/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study next week's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}
