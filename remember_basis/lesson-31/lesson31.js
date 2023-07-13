//task
//v1
// function printNumbers(from, to) {
// 	let count = from;

// 	intervalId = setInterval(() => {
// 		if (count > to) clearInterval(intervalId);
// 		else {
// 			console.log(count);
// 			count++;
// 		}
// 	}, 1000);
// }

// printNumbers(5, 10);

//v2
function printNumbers(from, to) {
	let count = from;

	let timerId = setTimeout(
		(printCurrentValue = () => {
			if (count > to) clearTimeout(timerId);
			else {
				console.log(count);
				count++;
				setTimeout(printCurrentValue, 1000);
			}
		}),
		1000
	);
}

printNumbers(5, 10);
