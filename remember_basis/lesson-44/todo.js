import { ERRORS, STATUSES, PRIORITIES, ELEMENTS, toDoList } from './namespace.js';

function hangHandlers() {
	for (const element of ELEMENTS.forms) {
		element.addEventListener('submit', addTask);
	}
}
hangHandlers();

function addTask(e) {
	const currentElement = e.target;
	const currentSection = currentElement.closest('.todo__item');

	const taskName = currentElement.firstElementChild.value;
	const taskPriority = currentElement.getAttribute('data-priority');
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex !== -1) showErrorText(ERRORS.taskAlredyExist);
	else {
		const currentTask = createTask(taskName, taskPriority);

		toDoList.push({ name: taskName, status: STATUSES.toDo, priority: taskPriority });
		currentSection.append(currentTask);
		clearInputs();
	}

	e.preventDefault();
}

function changeStatus(e) {
	const labelCheckBox = e.target;
	const taskName = labelCheckBox.closest('label').lastElementChild.textContent;
	const taskIndex = getTaskIndex(taskName);

	if (labelCheckBox.checked) toDoList[taskIndex].status = STATUSES.done;
	else toDoList[taskIndex].status = STATUSES.toDo;
}

function deleteTask(e) {
	const currentElement = e.target;
	const currentTask = currentElement.closest('.task');
	const taskName = currentTask.firstElementChild.lastElementChild.textContent;
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex === -1) showErrorText(ERRORS.taskNotExist);
	else {
		toDoList.splice(taskIndex, 1);
		currentTask.remove();
	}
}

function createTask(name, priority) {
	const task = document.createElement('div');
	task.classList.add('low-priority__task', 'task');
	task.setAttribute('data-priority', priority);

	const taskLabel = document.createElement('label');
	taskLabel.classList.add('task__label', 'label');

	const labelCheckBox = document.createElement('input');
	labelCheckBox.classList.add('label__check-box');
	labelCheckBox.setAttribute('type', 'checkbox');
	labelCheckBox.addEventListener('change', changeStatus);

	const labelStyle = document.createElement('span');
	labelStyle.classList.add('label__style');

	const labelText = document.createElement('span');
	labelText.classList.add('label__text');
	labelText.textContent = name;

	const taskBtn = document.createElement('div');
	taskBtn.classList.add('task__btn', 'btn');
	taskBtn.addEventListener('click', deleteTask);

	const btnSpan1 = document.createElement('span');
	const btnSpan2 = document.createElement('span');

	task.append(taskLabel, taskBtn);
	taskLabel.append(labelCheckBox, labelStyle, labelText);
	taskBtn.append(btnSpan1, btnSpan2);

	return task;
}

function clearInputs(params) {
	const taskInputs = document.querySelectorAll('.input');

	for (const input of taskInputs) input.value = '';
}
const getTaskIndex = taskName => toDoList.findIndex(task => task.name === taskName);

const showErrorText = error => console.log(error);
