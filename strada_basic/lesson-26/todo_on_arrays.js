const STATUSES = {
	To_Do: 'To Do',
	In_Progress: 'In Progress',
	Done: 'Done',
};

const PRIORITIES = {
	Low: 'Low',
	Medium: 'Medium',
	High: 'High',
};

const ERRORS = {
	Status_Error: 'status change is not possible',
	Priority_Error: 'priority change is not possible',
	Add_Error: 'adding a task is not possible',
	Deletion_Error: 'unable to delete task',
};

const list = [
	{ name: 'create a post', status: STATUSES.In_Progress, priority: PRIORITIES.Low },
	{ name: 'test', status: STATUSES.Done, priority: PRIORITIES.High },
];

function changeStatus(taskName, newStatus) {
	let foundTask = taskExists(taskName);

	checkStatus(newStatus) && foundTask ? (foundTask.status = newStatus) : console.log(ERRORS.Status_Error);
}

function changePriority(taskName, newPriority) {
	let foundTask = taskExists(taskName);

	checkPriority(newPriority) && foundTask ? (foundTask.priority = newPriority) : console.log(ERRORS.Priority_Error);
}

function addTask(taskName, status = STATUSES.To_Do, priority = PRIORITIES.Low) {
	if (!taskExists(taskName) && checkStatus(status) && checkPriority(priority)) list.push({ name: taskName, status: status, priority: priority });
	else console.log(ERRORS.Add_Error);
}

function deleteTask(taskName) {
	if (taskExists(taskName))
		list.splice(
			list.findIndex(task => task.name === taskName),
			1
		);
	else console.log(ERRORS.Deletion_Error);
}

function showList() {
	list = list.sort((a, b) => (a.priority > b.priority ? 1 : -1));

	let toDoStr = 'ToDo:\n';
	let inProgressStr = 'In Progress:\n';
	let doneStr = 'Done:\n';

	for (const obj of list) {
		if (obj.status === 'To Do') toDoStr += `  "${obj.name}": ${obj.priority} Priority,\n`;
		else if (obj.status === 'In Progress') inProgressStr += `  "${obj.name}": ${obj.priority} Priority,\n`;
		else if (obj.status === 'Done') doneStr += `  "${obj.name}" ${obj.priority} Priority,\n`;
	}

	console.log(`${toDoStr}${inProgressStr}${doneStr}`);
}

function taskExists(taskName) {
	let elExist = list.find(task => task.name === taskName);

	return elExist ? elExist : false;
}

function checkStatus(statusName) {
	for (const status in STATUSES) {
		if (statusName === STATUSES[status]) return true;
	}
}

function checkPriority(priorityName) {
	for (const priority in PRIORITIES) {
		if (priorityName === PRIORITIES[priority]) return true;
	}
}

changeStatus('create a post', 'To Do');
changePriority('test', 'Low');
addTask('complete tasks', 'In Progress', 'Medium');
addTask('test_2', 'In Progress', 'Medium');
addTask('test_3', 'Done', 'Medium');
addTask('test_4', 'Done', 'High');
addTask('test_5', 'Done', 'Low');
addTask('test_6', 'Done', 'Medium');
deleteTask('test');
showList();

console.log(list);
