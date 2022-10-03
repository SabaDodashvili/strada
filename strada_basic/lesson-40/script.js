let resultBoard = document.querySelector('.calc__result-board');
let equalityBtn = document.querySelector('.calc__equality-btn');
let calcResults = document.querySelector('.calc__results');

equalityBtn.addEventListener('click', () => {
	const operation = document.querySelector('.calc__select').value;
	const inputsColection = document.querySelectorAll('.calc__input');

	result = calc(operation, inputsColection[0].value.trim(), inputsColection[1].value.trim());

	if (!isNaN(result)) {
		resultBoard.textContent = Number(result.toFixed(10));

		let resultElem = document.createElement('div');
		resultElem.addEventListener('click', function () {
			this.remove();
		});
		resultElem.textContent = result;

		calcResults.prepend(resultElem);
	} else alert(result);
});

const ERRORS = {
	Not_Number: 'for the program to work correctly, enter the numbers',
	Wrong_Operator: 'enter the correct operator',
	Zero_Error: 'can not divide by zero',
};

const OPERATORS = {
	Add: '+',
	Sub: '-',
	Multi: '*',
	Division: '/',
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
	let validationResult = validateValues(operation, numbOne, numbTwo);

	if (validationResult === 'correct validation') {
		switch (operation) {
			case OPERATORS.Add:
				return Number(numbOne) + Number(numbTwo);
			case OPERATORS.Sub:
				return Number(numbOne) - Number(numbTwo);
			case OPERATORS.Multi:
				return Number(numbOne) * Number(numbTwo);
			case OPERATORS.Division:
				if (numbTwo == 0) return ERRORS.Zero_Error;
				return Number(numbOne) / Number(numbTwo);
			default:
				return 'unexpected error please try again';
		}
	} else {
		return validationResult;
	}
}
