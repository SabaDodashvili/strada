const STATUSES = {
	To_Do: 'To Do',
	Done: 'Done',
};

const list = [];

const formElems = document.querySelectorAll('.add-task__form');

for (const form of formElems) {
	form.addEventListener('submit', e => {
		addTask(e);
		e.preventDefault();
	});
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
}

function deleteTask(e) {
	const currentTask = e.target.closest('.task');
	const currentTaskId = currentTask.dataset.id;

	list.splice(
		list.findIndex(obj => obj.taskId == currentTaskId),
		1
	);

	currentTask.remove();
}

function changeStatus(e) {
	const currentTask = e.target.closest('.task');
	const currentTaskId = currentTask.dataset.id;
	const currentTaskObj = list.find(obj => obj.taskId == currentTaskId);

	if (currentTaskObj.taskStatus === STATUSES.To_Do) currentTaskObj.taskStatus = STATUSES.Done;
	else currentTaskObj.taskStatus = STATUSES.To_Do;

	render();
}

function clearInput(e) {
	const currentInput = e.target.firstElementChild;

	currentInput.value = '';
}

function render() {
	const allTasks = document.querySelectorAll('.task');

	for (const task of allTasks) {
		task.remove();
	}

	for (let i = 0; i < list.length; i++) {
		const highPriorityBlok = document.querySelector('.high-priority');
		const mediumPriorityBlok = document.querySelector('.medium-priority');
		const lowPriorityBlok = document.querySelector('.low-priority');

		let CheckBoxElement;

		if (list[i].taskStatus === STATUSES.To_Do) CheckBoxElement = `<input class="task__checkbox" type="checkbox" />`;
		else CheckBoxElement = `<input class="task__checkbox" type="checkbox" checked />`;

		const currentTask = `
	       <div class="${list[i].taskPriority}-priority__task task" data-id="${list[i].taskId}">
					<label class="task__label">
						${CheckBoxElement}
						<span class="task__style"></span>
					</label>
					<span class="task__text">${list[i].taskText}</span>
					<button class="task__cancel-btn">
						<svg><use xlink:href="sprite.svg#cancel"></use></svg>
					</button>
				</div>
	   `;

		if (list[i].taskPriority === 'high') highPriorityBlok.insertAdjacentHTML('beforeend', currentTask);
		else if (list[i].taskPriority === 'medium') mediumPriorityBlok.insertAdjacentHTML('beforeend', currentTask);
		else lowPriorityBlok.insertAdjacentHTML('beforeend', currentTask);
	}

	const cancelButtons = document.querySelectorAll('.task__cancel-btn');

	for (const cancelBtn of cancelButtons) {
		cancelBtn.addEventListener('click', e => {
			deleteTask(e);
		});
	}

	const checkBoxs = document.querySelectorAll('.task__checkbox');

	for (const checkBox of checkBoxs) {
		checkBox.addEventListener('click', e => changeStatus(e));
	}
}
