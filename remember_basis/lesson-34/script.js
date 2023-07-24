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
