// JavaScript source code
var num;
var isPrime = true;
var square;

num = parseInt(prompt("Please enter a number: ")); //ask user input
//num = parseInt(num); converts num into int
//if the user input 0 or 1
//tell them the num is not a prime

function isPrimeNum(num) {
	for (var i = 2; i * i <= num; i++) {
		if (num % i === 0) {
			return isPrime = false;
		}
	}
	return num > 1;
}
if (isPrimeNum(num) == true) {
	console.log(num + " is a prime number");
}
else {
	console.log(num + " is not a prime number");
}