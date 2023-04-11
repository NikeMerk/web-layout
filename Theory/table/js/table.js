


const allButtonTab = document.querySelectorAll('.table__button');
const allNameTab = document.querySelectorAll('.table__vertical');
allButtonTab.forEach((button) => {
	button.onclick = (e) => {
		const path =  e.currentTarget.dataset.path;
		
		console.log(check(allNameTab, path));
	}
})

function check(allNameTab, path) {
	allNameTab.forEach(name => name.classList.contains)
}



// document.querySelector(`[data-target=${selectButton}]`).classList.add('questions__svg--active');


