const form = document.querySelector('.form');

form.addEventListener('submit', genderize);

function genderize(e) {
	e.preventDefault();

	const SERVER_URL = 'https://api.genderize.io';
	const firstName = document.querySelector('.input-01').value;
	const url = `${SERVER_URL}?name=${firstName}`;

	fetch(url)
		.then(response => (response = response.json()))
		.then(userInfo => alert(`${userInfo.name} is ${userInfo.gender}`));
}
