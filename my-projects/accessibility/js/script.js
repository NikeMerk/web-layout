
// --- Header

// burger
const burger = document.getElementById('header-burger');
const burgerSpan = document.getElementById('header-burger__span');
const headerNav = document.getElementById('header__nav');
const headerSvg = document.getElementById('header__nav-svg');
burger.disabled = false;
burger.onclick = () => {
  burger.disabled = true;
  burger.classList.toggle('header-burger-click');
  burgerSpan.classList.toggle('header-burger-click__span');
  headerNav.classList.toggle('header__nav-click');
}
headerSvg.onclick = () => {
  burger.disabled = false;
  burger.classList.toggle('header-burger-click');
  burgerSpan.classList.toggle('header-burger-click__span');
  headerNav.classList.toggle('header__nav-click');
};

//search
const buttonSearch = document.getElementById('header-search');
const formSearch = document.getElementById('form-search');
const buttonFalse = document.getElementById('button-false-search');
const buttonTrue = document.getElementById('button-done-search');
const formSearchInput = document.getElementById('form-search-input');
buttonTrue.onclick = (e) => {
  if (!formSearchInput.value) {e.preventDefault();}
};
buttonSearch.onclick = () => {
  formSearch.classList.toggle('form-search-on');
}
buttonFalse.onclick = (e) => {
  e.preventDefault();
  formSearch.classList.toggle('form-search-on');
};




// --- Working

const allButtonsWorking = document.querySelectorAll('.working-list__btn');
const allBlocksWorking = document.querySelectorAll('.working-content__block-tab');
allButtonsWorking.forEach((button) => {
  button.onclick = (e) => {
    const path = e.currentTarget.dataset.path;

    allButtonsWorking.forEach((button) => {button.classList.remove('working-list__btn--active')})
    e.currentTarget.classList.add('working-list__btn--active');

    allBlocksWorking.forEach((block) => {block.classList.remove('working-content__block-tab--visible')});
    document.querySelector(`[data-target="${path}"]`).classList.add('working-content__block-tab--visible')
  }
});




// --- Faq

new Accordion('.accordion-container');
const allButtonsFaq = document.querySelectorAll('.questions__btn');
const allSvgFaq = document.querySelectorAll('.questions__svg');
let variable;
let count = 0;
allButtonsFaq.forEach((button) => {
  button.onclick = (e) => {
    const selectButton = e.currentTarget.dataset.path;
    if (variable == selectButton) {
      document.querySelector(`[data-target=${selectButton}]`).classList.toggle('questions__svg--active');
    }else {
      allSvgFaq.forEach((svg) => {svg.classList.remove('questions__svg--active')});
      document.querySelector(`[data-target=${selectButton}]`).classList.add('questions__svg--active');
      variable = selectButton;
    }

  };
})

const $labelFooterForm = document.querySelector('.form-label');
const $inputFooterForm = document.querySelector('.form-label__checkbox');
let countInputChecked = 0
$inputFooterForm.onclick = () => {
  if (countInputChecked % 2 == 0) $labelFooterForm.setAttribute('aria-checked', 'true');
  else  $labelFooterForm.removeAttribute('aria-checked');
  countInputChecked++;
  console.log(countInputChecked)
};





