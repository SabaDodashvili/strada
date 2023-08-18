export const ERRORS = {
	taskAlredyExist: 'such a task already exists',
	taskNotExist: 'such task does not exist',
	emptyValue: 'value is empty',
};

export const STATUSES = {
	done: 'Done',
	toDo: 'To Do',
};

export const PRIORITIES = {
	low: 'Low',
	medium: 'Medium',
	high: 'High',
};

export const ELEMENTS = {
	forms: document.querySelectorAll('.input-wrapper'),
	deleteButtons: document.querySelectorAll('.task__btn'),
};

export const toDoList = [
	// { name: 'create a post', status: STATUSES.done, priority: PRIORITIES.low },
	// { name: 'test', status: STATUSES.toDo, priority: PRIORITIES.high },
];
