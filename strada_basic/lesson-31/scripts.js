// 1) Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

//     Using setInterval.
//     Using nested setTimeout.

// function printNumbers(from, to) {
// 	let counter = from;

// 	let intervalId = setInterval(() => {
// 		if (counter === to) {
// 			clearInterval(intervalId);
// 		}

// 		console.log(counter);
// 		counter++;
// 	}, 1000);
// }
// printNumbers(5, 7);

// function printNumbers2(from, to) {
// 	let counter = from;

// 	let timerId = setTimeout(function go() {
// 		timerId = setTimeout(go, 1000);

// 		if (counter === to) clearInterval(timerId);

// 		console.log(counter);
// 		counter++;
// 	}, 1000);
// }

// printNumbers2(5, 7);

//solution 2

function printNumbers3(from, to) {
	let current = from;

	setTimeout(function go() {
		alert(current);
		if (current < to) {
			setTimeout(go, 1000);
		}
		current++;
	}, 1000);
}

printNumbers3(5, 7);
