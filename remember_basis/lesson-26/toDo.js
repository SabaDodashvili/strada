const ERRORS = {
	taskAlredyExist: 'such a task already exists',
	taskNotExist: 'such task does not exist',
};

const STATUSES = {
	done: 'Done',
	inProgress: 'In Progress',
	toDo: 'To Do',
};

const PRIORITIES = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
};

const toDoList = [];

function addTask(taskName, status = STATUSES.toDo, priority = PRIORITIES.low) {
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex !== -1) showErrorText(ERRORS.taskAlredyExist);
	else toDoList.push({ name: taskName, status: status, priority: priority });
}

function changePriority(taskName, priority = PRIORITIES.low) {
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex === -1) showErrorText(ERRORS.taskNotExist);
	else toDoList[taskIndex].priority = priority;
}

function changeStatus(taskName, status = STATUSES.toDo) {
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex === -1) showErrorText(ERRORS.taskNotExist);
	else toDoList[taskIndex].status = status;
}

function deleteTask(taskName) {
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex === -1) showErrorText(ERRORS.taskNotExist);
	else toDoList.splice(taskIndex, 1);
}

showList = () => {
	let toDo = `${STATUSES.toDo}:`;
	let inProgress = `\n${STATUSES.inProgress}:`;
	let done = `\n${STATUSES.done}:`;

	for (const task of toDoList) {
		taskStatus = task.status;

		if (taskStatus === STATUSES.toDo) toDo += `\n    "${task.name}"`;
		else if (taskStatus === STATUSES.inProgress) inProgress += `\n    "${task.name}"`;
		else if (taskStatus === STATUSES.done) done += `\n    "${task.name}"`;
	}

	const taskList = toDo + inProgress + done;
	console.log(taskList);
};

const getTaskIndex = taskName => toDoList.findIndex(task => task.name === taskName);

const showErrorText = error => console.log(error);

showList();
