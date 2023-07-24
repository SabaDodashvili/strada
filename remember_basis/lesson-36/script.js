const timerBtn = document.querySelector('.button');

timerBtn.addEventListener('click', startOrStopTimer);

let seconds = 0;
let switcher = false;
let timeOut;

function startOrStopTimer(e) {
	if (!switcher) {
		switcher = true;
		timeOut = setTimeout(function func() {
			seconds++;
			console.log(seconds);
			timeOut = setTimeout(func, 1000);
		}, 1000);
	} else {
		switcher = false;
		clearTimeout(timeOut);
	}
}
