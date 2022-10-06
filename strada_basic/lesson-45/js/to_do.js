const formElems = document.querySelectorAll('.add-task__form');

for (const form of formElems) {
	form.addEventListener('submit', e => {
		createElement(e);
		e.preventDefault();
	});
}

function createElement(e) {
	const inputText = e.target.firstElementChild;
	const PriorityBlok = e.target.parentElement.parentElement;

	let newTask;

	if (inputText.value) {
		newTask = `
        <div class="high-priority__task task">
					<label class="task__label">
						<input class="task__checkbox" type="checkbox" />
						<span class="task__style"></span>
					</label>
					<span class="task__text">${inputText.value}</span>
					<button class="task__cancel-btn">
						<svg><use xlink:href="sprite.svg#cancel"></use></svg>
					</button>
				</div>
    `;

		addTask(PriorityBlok, newTask);

		const cancelBtn = PriorityBlok.lastElementChild.lastElementChild;

		cancelBtn.addEventListener('click', e => {
			deleteTask(e);
		});
	} else {
		alert('enter text');
	}
}

function deleteTask(e) {
	const currentTask = e.target.closest('.task');

	currentTask.remove();
}

function addTask(where, task) {
	where.insertAdjacentHTML('beforeend', task);
}
