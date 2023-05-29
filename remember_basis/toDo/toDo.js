const ERRORS = {
	taskAlredyExist: 'such a task already exists',
	taskNotExist: 'such task does not exist',
};
const STATUSES = {
	done: 'Done',
	inProgress: 'In Progress',
	toDo: 'To Do',
};
const toDoList = {};

function addTask(taskName, status) {
	const taskExist = checkTaskExist(taskName);

	if (!taskExist) toDoList[taskName] = status;
	else showErrorText(ERRORS.taskAlredyExist);
}

function changeStatus(taskName, status) {
	const taskExist = checkTaskExist(taskName);

	if (taskExist) toDoList[taskName] = status;
	else showErrorText(ERRORS.taskNotExist);
}

function deleteTask(taskName) {
	const taskExist = checkTaskExist(taskName);

	if (taskExist) delete toDoList[taskName];
	else showErrorText(ERRORS.taskNotExist);
}

function showList() {
	let toDo = `${STATUSES.toDo}:`;
	let inProgress = `\n${STATUSES.inProgress}:`;
	let done = `\n${STATUSES.done}:`;

	for (const task in toDoList) {
		taskStatus = toDoList[task];

		if (taskStatus === STATUSES.toDo) toDo += `\n    "${task}"`;
		else if (taskStatus === STATUSES.inProgress) inProgress += `\n    "${task}"`;
		else if (taskStatus === STATUSES.done) done += `\n    "${task}"`;
	}

	const taskList = toDo + inProgress + done;
	console.log(taskList);
}

function checkTaskExist(task) {
	return task in toDoList ? true : false;
}

function showErrorText(error) {
	console.log(error);
}

showList();
