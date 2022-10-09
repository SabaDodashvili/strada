const STATUSES = {
	To_Do: 'To Do',
	Done: 'Done',
};

const list = [];

function hangsListenersOnForms() {
	const formElems = document.querySelectorAll('.add-task__form');

	formElems.forEach(form => form.addEventListener('submit', addTask));
}

hangsListenersOnForms();

function addTask(e) {
	const taskObj = {
		taskPriority: e.target.dataset.priority,
		taskText: e.target.firstElementChild.value,
		taskStatus: STATUSES.To_Do,
		taskId: list[list.length - 1] ? list[list.length - 1].taskId + 1 : 0,
	};

	list.push(taskObj);

	clearInput(e);

	render();

	e.preventDefault();
}

function deleteTask(e) {
	const taskInfo = getTaskData(e, true);

	const filtredList = list.filter(taskObj => taskObj.taskId !== taskInfo.currentTaskId);
	list.length = 0;
	filtredList.forEach(taskObj => list.push(taskObj));

	taskInfo.currentTask.remove();

	e.preventDefault();
}

function changeStatus(e) {
	const currentTaskId = getTaskData(e);
	const currentTaskObj = list.find(obj => obj.taskId === currentTaskId);

	currentTaskObj.taskStatus = currentTaskObj.taskStatus === STATUSES.To_Do ? STATUSES.Done : STATUSES.To_Do;

	render();

	e.preventDefault();
}

function createTaskElement(taskObj) {
	const taskElements = {
		task: document.createElement('div'),
		taskLabel: document.createElement('label'),
		taskText: document.createElement('span'),
		taskCancelBtn: document.createElement('button'),
	};

	taskElements.task.className = `${taskObj.taskPriority}-priority__task task`;
	taskElements.task.setAttribute('id', `${taskObj.taskId}`);

	taskElements.taskLabel.className = 'task_label';
	if (taskObj.taskStatus === STATUSES.To_Do) {
		taskElements.taskLabel.innerHTML = `
            <input class="task__checkbox" type="checkbox"/>
						<span class="task__style"></span>`;
	} else {
		taskElements.taskLabel.innerHTML = `
            <input class="task__checkbox" type="checkbox" checked/>
						<span class="task__style"></span>`;
	}
	taskElements.taskLabel.addEventListener('click', changeStatus);

	taskElements.taskText.className = 'task__text';
	taskElements.taskText.textContent = taskObj.taskText;

	taskElements.taskCancelBtn.className = 'task__cancel-btn';
	taskElements.taskCancelBtn.innerHTML = '<svg><use xlink:href="sprite.svg#cancel"></use></svg>';
	taskElements.taskCancelBtn.addEventListener('click', deleteTask);

	taskElements.task.append(taskElements.taskLabel, taskElements.taskText, taskElements.taskCancelBtn);

	return taskElements.task;
}

function render() {
	const priorityBloks = {
		highPriorityBlok: document.querySelector('.high-priority'),
		mediumPriorityBlok: document.querySelector('.medium-priority'),
		lowPriorityBlok: document.querySelector('.low-priority'),
	};

	removeAllTask();

	list.forEach(taskObj => {
		const task = createTaskElement(taskObj);

		if (taskObj.taskPriority === 'high') priorityBloks.highPriorityBlok.append(task);
		else if (taskObj.taskPriority === 'medium') priorityBloks.mediumPriorityBlok.append(task);
		else priorityBloks.lowPriorityBlok.append(task);
	});
}

function clearInput(e) {
	const currentInput = e.target.firstElementChild;

	currentInput.value = '';
}

function removeAllTask() {
	const allTasks = document.querySelectorAll('.task');

	allTasks.forEach(task => task.remove());
}

function getTaskData(e, needTask) {
	const currentTask = e.target.closest('.task');
	const currentTaskId = Number(currentTask.getAttribute('id'));

	return needTask ? { currentTask: currentTask, currentTaskId: currentTaskId } : currentTaskId;
}
