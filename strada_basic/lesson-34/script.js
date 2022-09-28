//task - 1

//solution - 1
// function buildFun(n) {
// 	var res = [];

// 	for (var i = 0; i < n; i++) {
// 		let k = i;

// 		res.push(function () {
// 			console.log(k);
// 			return k;
// 		});
// 	}
// 	return res;
// }

// console.log(buildFun(5)[1]());

//solution - 2
// function buildFun(n) {
// 	var res = [];

// 	for (let i = 0; i < n; i++) {
// 		res.push(function () {
// 			console.log(i);
// 			// return i;
// 		});
// 	}
// 	return res;
// }

// let funcsArr = buildFun(5);

// console.log(funcsArr[2]());

//solution - 3 without let
function buildFun(n) {
	var res = [];

	for (var i = 0; i < n; i++) {
		function closesValue(value) {
			return () => {
				console.log(value);
				return value;
			};
		}

		res.push(closesValue(i));
	}
	return res;
}

let funcsArr = buildFun(5);

console.log(funcsArr[2]());

//task - 2
// function getAverage(marks) {
// 	return Math.floor(marks.reduce((sum, current) => sum + current) / marks.length);
// }

// console.log(getAverage([5, 5, 5, 5, 5]));
