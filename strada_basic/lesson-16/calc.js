let a = prompt('enter the first number', '0');
let b = prompt('enter the second number', '0');
let operation = prompt('enter one of the operators: add, sub, multi', 'add');

const ERRORS = {
	Not_Number: 'for the program to work correctly, enter the numbers',
	Wrong_Operator: 'enter the correct operator',
};

const OPERATORS = {
	Add: 'add',
	Multi: 'multi',
	Sub: 'sub',
};

function validateValues(operation, numbOne, numbTwo) {
	let notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));
	let operationIsCorrect = false;

	for (const operator in OPERATORS) {
		if (OPERATORS[operator] === operation) {
			operationIsCorrect = true;
			break;
		}
	}

	if (notNumber) return ERRORS.Not_Number;
	else if (!operationIsCorrect) return ERRORS.Wrong_Operator;
	else return 'correct validation';
}

function calc(operation, numbOne, numbTwo) {
	let OPERATIONS = {
		add: '+',
		sub: '-',
		multi: '*',
	};

	let validationResult = validateValues(operation, numbOne, numbTwo);

	if (validationResult === 'correct validation') {
		switch (OPERATIONS[operation]) {
			case OPERATIONS.add:
				return Number(numbOne) + Number(numbTwo);
			case OPERATIONS.sub:
				return Number(numbOne) - Number(numbTwo);
			case OPERATIONS.multi:
				return Number(numbOne) * Number(numbTwo);
			default:
				return 'unexpected error please try again';
		}
	} else {
		return validationResult;
	}
}

console.log(calc(operation, a, b));
