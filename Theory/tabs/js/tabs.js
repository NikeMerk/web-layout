const allBtn = document.querySelectorAll('.button');
const allBlock = document.querySelectorAll('.block-content');

allBtn.forEach((button) => {
	button.onclick = (e) => {
		const path = e.currentTarget.dataset.path;

		allBtn.forEach((btn) => {btn.classList.remove('button-active');});
		e.currentTarget.classList.add('button-active');

		allBlock.forEach((elem) => {elem.classList.remove('block-content--active')});
		document.querySelector(`[data-target="${path}"]`).classList.add('block-content--active');
	};
})



































