const form = document.querySelector('.form');

form.addEventListener('submit', genderize);

function genderize(e) {
	e.preventDefault();

	const firstName = document.querySelector('.input-01').value;
	const serverUrl = 'https://api.genderize.io';
	const url = `${serverUrl}?name=${firstName}`;

	const p1 = new Promise((resolve, reject) => {
		const data = fetch(url);
		resolve(data);
	});

	p1.then(response => {
		new Promise((resolve, reject) => {
			const responseObj = response.json();

			resolve(responseObj);
		}).then(result => alert(`${result.name} is ${result.gender}`));
	});
}
