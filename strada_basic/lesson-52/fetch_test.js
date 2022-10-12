async function getResponse() {
	let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

	console.log(await response.json());
}

getResponse();
