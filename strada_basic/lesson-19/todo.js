const STATUSES = {
	To_Do: 'To Do',
	In_Progress: 'In Progress',
	Done: 'Done',
};

const list = {
	'buy products': STATUSES.To_Do,
	'find job': STATUSES.In_Progress,
	'make todo List': STATUSES.Done,
};

function changeStatus(task, newStatus) {
	if (keyExists(task) && checkStatus(newStatus)) list[task] = newStatus;
}

function addTask(task, status = 'To Do') {
	if (!keyExists(task) && checkStatus(status)) list[task] = status;
}

function deleteTask(task) {
	if (keyExists(task)) delete list[task];
}

function showList() {
	let toDoStr = 'ToDo:\n';
	let inProgressStr = 'In Progress:\n';
	let doneStr = 'Done:\n';

	for (const key in list) {
		if (list[key] === 'To Do') toDoStr += `  "${key}",\n`;
		else if (list[key] === 'In Progress') inProgressStr += `  "${key}",\n`;
		else if (list[key] === 'Done') doneStr += `  "${key}",\n`;
	}

	console.log(toDoStr + inProgressStr + doneStr);
}

function keyExists(keyName) {
	if (keyName in list) return true;
}

function checkStatus(status) {
	for (const key in STATUSES) {
		if (status === STATUSES[key]) return true;
	}
	return false;
}

changeStatus('buy products', 'In Progress');
addTask('do PR', 'To Do');
addTask('finish strada', 'In Progress');
addTask('refactor code', 'Done');

deleteTask('find job');
showList();
console.log(list);
