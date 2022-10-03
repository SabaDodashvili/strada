export const ERRORS = {
	Not_Number: 'for the program to work correctly, enter the numbers',
	Wrong_Operator: 'enter the correct operator',
	Zero_Error: 'can not divide by zero',
};

export const OPERATORS = {
	Add: '+',
	Sub: '-',
	Multi: '*',
	Division: '/',
};

export const ELEMENTS = {
	Result_Board: document.querySelector('.calc__result-board'),
	Equality_Btn: document.querySelector('.calc__equality-btn'),
	Calc_Results: document.querySelector('.calc__results'),
	Operation: document.querySelector('.calc__select'),
	Inputs_Colection: document.querySelectorAll('.calc__input'),
};
