const OPERATORS = {
	add: '+',
	multi: '*',
	minus: '-',
	substract: '/',
};

const ERRORS = {
	operatorError: 'enter the correct operator',
	nonNumberValue: 'please enter a number',
};

const resultBtn = document.querySelector('.calc-container__result-btn');
resultBtn.addEventListener('click', showResult);

function calc() {
	const calcInputs = document.querySelectorAll('.calc-container__input');
	const a = calcInputs[0].value;
	const b = calcInputs[1].value;
	const operation = document.querySelector('.calc-container__select').value;

	const validationResult = inputValidation(a, b);

	if (validationResult) {
		switch (operation) {
			case OPERATORS.add:
				return Number(a) + Number(b);
			case OPERATORS.minus:
				return Number(a) - Number(b);
			case OPERATORS.multi:
				return Number(a) * Number(b);
			case OPERATORS.substract:
				return Number(a) / Number(b);
		}
	}

	return ERRORS.nonNumberValue;
}

function inputValidation(a, b) {
	if (Number(a) && Number(b)) return true;
	return false;
}

function showResult() {
	const resultBoard = document.querySelector('.calc-container__result');
	const result = calc();

	resultBoard.textContent = result;
}
