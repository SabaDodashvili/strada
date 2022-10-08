const STATUSES = {
	To_Do: 'To Do',
	Done: 'Done',
};

const list = [];

const formElems = document.querySelectorAll('.add-task__form');

for (const form of formElems) {
	form.addEventListener('submit', addTask);
}

let taskId = 1;

function addTask(e) {
	const taskPriority = e.target.dataset.priority;
	const taskText = e.target.firstElementChild.value;
	const taskStatus = STATUSES.To_Do;

	taskId++;

	list.push({ taskPriority, taskText, taskStatus, taskId });

	clearInput(e);

	render();

	e.preventDefault();
}

function deleteTask(e) {
	const currentTask = e.target.closest('.task');
	const currentTaskId = Number(currentTask.getAttribute('id'));

	list.splice(
		list.findIndex(obj => obj.taskId === currentTaskId),
		1
	);

	currentTask.remove();

	e.preventDefault();
}

function changeStatus(e) {
	const currentTask = e.target.closest('.task');
	const currentTaskId = Number(currentTask.getAttribute('id'));
	const currentTaskObj = list.find(obj => obj.taskId === currentTaskId);

	if (currentTaskObj.taskStatus === STATUSES.To_Do) currentTaskObj.taskStatus = STATUSES.Done;
	else currentTaskObj.taskStatus = STATUSES.To_Do;

	render();

	e.preventDefault();
}

function clearInput(e) {
	const currentInput = e.target.firstElementChild;

	currentInput.value = '';
}

function createTaskElement(i) {
	const task = document.createElement('div');
	const taskLabel = document.createElement('label');
	const taskText = document.createElement('span');
	const taskCancelBtn = document.createElement('button');

	task.className = `${list[i].taskPriority}-priority__task task`;
	task.setAttribute('id', `${list[i].taskId}`);

	taskLabel.className = 'task_label';
	if (list[i].taskStatus === STATUSES.To_Do) {
		taskLabel.innerHTML = `
            <input class="task__checkbox" type="checkbox"/>
						<span class="task__style"></span>`;
	} else {
		taskLabel.innerHTML = `
            <input class="task__checkbox" type="checkbox" checked/>
						<span class="task__style"></span>`;
	}
	taskLabel.addEventListener('click', changeStatus);

	taskText.className = 'task__text';
	taskText.textContent = list[i].taskText;

	taskCancelBtn.className = 'task__cancel-btn';
	taskCancelBtn.innerHTML = '<svg><use xlink:href="sprite.svg#cancel"></use></svg>';
	taskCancelBtn.addEventListener('click', deleteTask);

	task.append(taskLabel, taskText, taskCancelBtn);

	return task;
}

function render() {
	const highPriorityBlok = document.querySelector('.high-priority');
	const mediumPriorityBlok = document.querySelector('.medium-priority');
	const lowPriorityBlok = document.querySelector('.low-priority');

	removeAllTask();

	list.forEach((taskObj, i) => {
		const task = createTaskElement(i);

		if (taskObj.taskPriority === 'high') highPriorityBlok.append(task);
		else if (taskObj.taskPriority === 'medium') mediumPriorityBlok.append(task);
		else lowPriorityBlok.append(task);
	});
}

function removeAllTask() {
	const allTasks = document.querySelectorAll('.task');

	allTasks.forEach(task => task.remove());
}
