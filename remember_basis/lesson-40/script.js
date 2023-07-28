const CALC_ELEMENTS = {
	Result_Button: document.querySelector('.calc-container__result-btn'),
	Calc_Inputs: document.querySelectorAll('.calc-container__input'),
	Result_Board: document.querySelector('.calc-container__result'),
	Results_Board: document.querySelector('.results-board'),
};
const OPERATORS = {
	add: '+',
	multi: '*',
	minus: '-',
	substract: '/',
};

const ERRORS = {
	nonNumberValue: 'please enter a number',
	zeroMultiplication: 'cannot be multiplied by zero',
};

CALC_ELEMENTS.Result_Button.addEventListener('click', showResult);

function calc() {
	const numbOne = CALC_ELEMENTS.Calc_Inputs[0].value.trim();
	const numbTwo = CALC_ELEMENTS.Calc_Inputs[1].value.trim();
	const operation = document.querySelector('.calc-container__select').value;

	const validationResult = inputValidation(numbOne, numbTwo, operation);

	if (validationResult === 'validation passed') {
		switch (operation) {
			case OPERATORS.add:
				return Number(numbOne) + Number(numbTwo);
			case OPERATORS.minus:
				return numbOne - numbTwo;
			case OPERATORS.multi:
				return numbOne * numbTwo;
			case OPERATORS.substract:
				return numbOne / numbTwo;
		}
	}
	alert(validationResult);
}

function inputValidation(numbOne, numbTwo, operation) {
	const notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));
	const zeroDivision = numbTwo === '0' && operation === OPERATORS.substract;

	if (notNumber) return ERRORS.nonNumberValue;
	else if (zeroDivision) return ERRORS.zeroMultiplication;
	else return 'validation passed';
}

function showResult() {
	const result = calc();

	CALC_ELEMENTS.Result_Board.textContent = result;

	saveResult(result);
}

function saveResult(result) {
	const currentResult = document.createElement('div');
	currentResult.classList.add('results-board__item');
	currentResult.textContent = result;
	currentResult.addEventListener('click', deleteElement);

	CALC_ELEMENTS.Results_Board.appendChild(currentResult);
}

function deleteElement(e) {
	e.target.remove();
}
