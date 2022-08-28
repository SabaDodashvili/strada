function showVerticalMessage(str) {
	let verticalStr = '';
	if (typeof str === 'string' && str.trim().length !== 0) {
		for (let i = 0; i < 7; i++) {
			if (i === 0 && str[i] === 's') {
				verticalStr += str[i].toUpperCase();
				continue;
			} else if (str[i] !== undefined) verticalStr += str[i];
		}
		console.log(verticalStr);
		return;
	}

	console.log('input string');
}
showVerticalMessage('  ');
