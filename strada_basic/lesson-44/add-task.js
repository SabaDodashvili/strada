const formElems = document.querySelectorAll('.add-task__form');

for (const form of formElems) {
	form.addEventListener('submit', e => {
		addTask(e);
	});
}

function addTask(e) {
	const inputText = e.target.firstElementChild;
	const highPriorityBlok = e.target.parentElement.parentElement;
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

		highPriorityBlok.insertAdjacentHTML('beforeend', newTask);
	} else {
		alert('erroe');
	}

	e.preventDefault();
}
