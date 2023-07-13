function createCounter() {
	let count = 1;

	return () => count++;
}

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
