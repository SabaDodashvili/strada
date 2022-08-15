let a = prompt('enter the first number', '0');
let b = prompt('enter the second number', '0');
let operation = prompt('enter one of the operators: +, -, *', '+');

function calc(operation, numbOne, numbTwo) {
	let checkOnSpaces = numbOne === ' ' || numbTwo === ' ';
	let notNumber = numbOne === '' || isNaN(numbOne) || numbTwo === '' || isNaN(numbTwo);
	let operationIsCorrect = operation === '+' || operation === '-' || operation === '*';

	if (checkOnSpaces || notNumber) return 'for the program to work correctly, enter the numbers';
	else if (!operationIsCorrect) return 'enter the correct operator';
	else {
		switch (operation) {
			case '+':
				return +numbOne + +numbTwo;
			case '-':
				return +numbOne - +numbTwo;
			case '*':
				return +numbOne * +numbTwo;
			default:
				return 'unexpected error please try again';
		}
	}
}

console.log(calc(operation, a, b));
