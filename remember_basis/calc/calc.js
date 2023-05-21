const OPERATORS = {
	add: 'add',
	multi: 'multi',
	substract: 'substract',
};

const ERRORS = {
	operatorError: 'enter the correct operator',
	nonNumberValue: 'please enter a number',
};

function calc(a, b, operation) {
	const validationResult = inputValidation(a, b);

	if (validationResult) {
		if (operation === 'add') return Number(a) + Number(b);
		else if (operation === 'multi') return Number(a) * Number(b);
		else if (operation === 'substract') return Number(a) / Number(b);
	}

	return ERRORS.nonNumberValue;
}

function inputValidation(a, b) {
	if (Number(a) && Number(b)) return true;
	return false;
}

function showResult(calcResult) {
	console.log(calcResult);
}

console.log(calc(1, 2, OPERATORS.substract));
