import { ERRORS } from './name_space.js';
import { OPERATORS } from './name_space.js';
import { ELEMENTS } from './name_space.js';

ELEMENTS.Equality_Btn.addEventListener('click', showResult);

function showResult() {
	const result = calc(ELEMENTS.Operation.value, ELEMENTS.Inputs_Colection[0].value.trim(), ELEMENTS.Inputs_Colection[1].value.trim());

	if (!isNaN(result)) {
		ELEMENTS.Result_Board.textContent = Number(result.toFixed(10));
		createAndAddElement('div', result);
	} else alert(result);
}

function createAndAddElement(tagName, elementText) {
	const resultElem = document.createElement(tagName);

	resultElem.addEventListener('click', function () {
		this.remove();
	});

	resultElem.textContent = elementText;

	ELEMENTS.Calc_Results.prepend(resultElem);
}

function validateValues(operation, numbOne, numbTwo) {
	const notNumber = (numbOne !== '0' && isNaN(numbOne / numbOne)) || (numbTwo !== '0' && isNaN(numbTwo / numbTwo));
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
	const validationResult = validateValues(operation, numbOne, numbTwo);

	if (validationResult === 'correct validation') {
		switch (operation) {
			case OPERATORS.Add:
				return Number(numbOne) + Number(numbTwo);
			case OPERATORS.Sub:
				return numbOne - numbTwo;
			case OPERATORS.Multi:
				return numbOne * numbTwo;
			case OPERATORS.Division:
				if (numbTwo == 0) return ERRORS.Zero_Error;
				return numbOne / numbTwo;
			default:
				return 'unexpected error please try again';
		}
	} else {
		return validationResult;
	}
}
