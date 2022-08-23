function showVerticalMessage(str) {
	let verticalStr = '';
	if (str[0] === 's') verticalStr += `${str[0].toUpperCase()}\n`;
	else verticalStr += `${str[0]}\n`;

	if (str.length > 7) {
		for (let i = 1; i < 7; i++) {
			verticalStr += `${str[i]}\n`;
		}
	} else {
		for (let i = 1; i < str.length; i++) {
			verticalStr += `${str[i]}\n`;
		}
	}

	return verticalStr;
}

console.log(showVerticalMessage('strada'));
