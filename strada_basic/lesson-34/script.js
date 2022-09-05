//task - 1
function buildFun(n) {
	var res = [];

	for (var i = 0; i < n; i++) {
		let k = i;

		res.push(function () {
			console.log(k);
		});
	}
	return res;
}

//task - 2
function getAverage(marks) {
	return Math.floor(marks.reduce((sum, current) => sum + current) / marks.length);
}

console.log(getAverage([5, 5, 5, 5, 5]));
