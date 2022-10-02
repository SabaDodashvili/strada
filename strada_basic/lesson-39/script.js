//task -1
let a = document.querySelector('[data-widget-name]');

console.log(a.dataset.widgetName); // V-1
console.log(a.getAttribute('data-widget-name')); // V-2

//task -2
let linksColection = document.querySelectorAll('ul a');

for (let i = 0; i < linksColection.length; i++) {
	if (linksColection[i].getAttribute('href').includes('http://internal.com/test')) continue;
	if (linksColection[i].getAttribute('href').includes('://')) linksColection[i].style.color = 'orange';
}

console.log(linksColection);
