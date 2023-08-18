import { ERRORS, STATUSES, PRIORITIES, ELEMENTS, toDoList } from './namespace.js';
import data from './tasks.json' assert { type: 'json' };

function loadDataFromJson() {
	for (const task of data.tasks) {
		toDoList.push(task);
	}

	render();
}
loadDataFromJson();

function hangHandlers() {
	for (const element of ELEMENTS.forms) {
		element.addEventListener('submit', addTask);
	}
}
hangHandlers();

function addTask(e) {
	const currentElement = e.target;

	const taskName = currentElement.firstElementChild.value;
	const taskPriority = currentElement.getAttribute('data-priority');
	const taskIndex = getTaskIndex(taskName);

	if (!taskName.trim()) showErrorText(ERRORS.emptyValue);
	else if (taskIndex !== -1) showErrorText(ERRORS.taskAlredyExist);
	else {
		toDoList.push({ name: taskName, status: STATUSES.toDo, priority: taskPriority });
		render();
		clearInputs();
	}

	e.preventDefault();
}

function changeStatus(e) {
	const labelCheckBox = e.target;
	const taskName = labelCheckBox.closest('label').lastElementChild.textContent;
	const taskIndex = getTaskIndex(taskName);

	if (labelCheckBox.checked) {
		toDoList[taskIndex].status = STATUSES.done;
		render();
	} else {
		toDoList[taskIndex].status = STATUSES.toDo;
		render();
	}
}

function deleteTask(e) {
	const currentElement = e.target;
	const currentTask = currentElement.closest('.task');
	const taskName = currentTask.firstElementChild.lastElementChild.textContent;
	const taskIndex = getTaskIndex(taskName);

	if (taskIndex === -1) showErrorText(ERRORS.taskNotExist);
	else {
		toDoList.splice(taskIndex, 1);
		render();
	}
}

function render() {
	const highPrioritySection = document.querySelector('.high-priority');
	const mediumPrioritySection = document.querySelector('.medium-priority');
	const lowPrioritySection = document.querySelector('.low-priority');

	deleteTasks();

	for (const taskObj of toDoList) {
		const task = createTask(taskObj.name, taskObj.status, taskObj.priority);

		if (taskObj.priority === PRIORITIES.high) highPrioritySection.append(task);
		else if (taskObj.priority === PRIORITIES.medium) mediumPrioritySection.append(task);
		else lowPrioritySection.append(task);
	}
}

function deleteTasks() {
	const allTasks = document.querySelectorAll('.task');
	for (const task of allTasks) task.remove();
}

function createTask(name, status, priority) {
	const task = document.createElement('div');
	task.setAttribute('data-priority', priority.toLowerCase());
	task.classList.add(`${priority.toLowerCase()}-priority__task`, 'task');

	const taskLabel = document.createElement('label');
	taskLabel.classList.add('task__label', 'label');

	const labelCheckBox = document.createElement('input');
	labelCheckBox.classList.add('label__check-box');
	labelCheckBox.setAttribute('type', 'checkbox');
	labelCheckBox.addEventListener('change', changeStatus);

	if (status === STATUSES.toDo) labelCheckBox.checked = false;
	else labelCheckBox.checked = true;

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

function clearInputs() {
	const taskInputs = document.querySelectorAll('.input');

	for (const input of taskInputs) input.value = '';
}
const getTaskIndex = taskName => toDoList.findIndex(task => task.name === taskName);

const showErrorText = error => alert(error);
