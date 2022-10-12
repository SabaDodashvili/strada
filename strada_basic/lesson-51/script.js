// task - 1
// (1)
//task - 2

//solution - 1
// function delay(ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('выполнилось через 3 секунды');
// 		}, ms);
// 	});
// }

// let p1 = delay(3000);

// p1.then(alert);

//solution - 2
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
