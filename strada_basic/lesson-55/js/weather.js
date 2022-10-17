const SERVER_URL = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const searchInputEl = document.querySelector('.search__input');

const list = [];

const form = document.querySelector('.search');

form.addEventListener('submit', render);

function render(e) {
	const cityName = getSearchResult();
	const url = `${SERVER_URL}?q=${cityName}&appid=${apiKey}&units=metric`;
	const weatherInfo = loadJson(url);

	weatherInfo.then(info => addCity(info, cityName));

	e.preventDefault();
}

function addCity(info, cityName) {
	const cityObj = {
		name: cityName,
		wheather: info.weather[0].main,
		temperature: Math.round(info.main.temp),
		feelsLike: Math.round(info.main.temp),
	};

	const nowTabTemperatureEl = document.querySelector('.now-block__degrees');
	const locationsListEl = document.querySelector('.locations-list');
	const locationsListItemEl = document.createElement('li');

	locationsListItemEl.className = 'locations-list__item';
	locationsListItemEl.textContent = cityObj.name;
	nowTabTemperatureEl.textContent = cityObj.temperature;

	locationsListEl.append(locationsListItemEl);

	list.push(cityObj);
}

function getSearchResult() {
	return searchInputEl.value;
}

function loadJson(url) {
	return fetch(url).then(response => response.json());
}
