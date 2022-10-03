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

let resultBoard = document.querySelector('.calc__result-board');
let equalityBtn = document.querySelector('.calc__equality-btn');
let calcResults = document.querySelector('.calc__results');

equalityBtn.addEventListener('click', showResult);

function showResult() {
	const operation = document.querySelector('.calc__select').value;
	const inputsColection = document.querySelectorAll('.calc__input');

	result = calc(operation, inputsColection[0].value.trim(), inputsColection[1].value.trim());

	if (!isNaN(result)) {
		resultBoard.textContent = Number(result.toFixed(10));
		createAndAddElement('div', result);
	} else alert(result);
}

function createAndAddElement(tagName, elementText) {
	let resultElem = document.createElement(tagName);
	resultElem.addEventListener('click', function () {
		this.remove();
	});
	resultElem.textContent = elementText;

	calcResults.prepend(resultElem);
}

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
