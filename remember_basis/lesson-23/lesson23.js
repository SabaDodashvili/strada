function showVerticalMessage(string) {
	if (!isString(string)) console.log('enter string');
	else {
		let verticalStr = string[0] === 's' ? 'S' : string[0];

		for (let i = 1; i < (string.length < 7 ? string.length : 7); i++) verticalStr += '\n' + string[i];

		console.log(verticalStr);
	}
}

function isString(str) {
	return typeof str === 'string' ? true : false;
}
