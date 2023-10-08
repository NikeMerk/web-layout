// burger
const $burger = document.getElementById("header-burger");
const $burgerNav = document.getElementById("burger-nav");
const $burgerSvgClose = document.getElementById("burger-nav__svg-close");

$burger.onclick = () => {
  $burger.disabled = true;
  $burger.classList.add("header-burger-click");
  $burgerNav.classList.add("burger-nav__visible");
};

$burgerSvgClose.onclick = () => {
  $burgerNav.classList.remove("burger-nav__visible");
  $burger.classList.remove("header-burger-click");
  $burger.disabled = false;
};

// button search
const $startSearch = document.querySelector(".button-search");
const $formSearch = document.querySelector(".form-search");
const $formClose = document.querySelector(".form-search__button-close");

$startSearch.onclick = () => {
  $formSearch.classList.add("form-search-visible");
};

$formClose.onclick = () => {
  $formSearch.classList.remove("form-search-visible");
};

// input area-checked
const $labelChecked = document.querySelector(".about-us-form__label");
const $inputChecked = document.querySelector(".about-us-form__checkpoint");

$inputChecked.onclick = () => {
  if (!$inputChecked.hasAttribute("area-checked")) {
    $inputChecked.setAttribute("area-checked", "true");
  } else $inputChecked.removeAttribute("area-checked");
};

// input name (valid)
const regOne = /([0-9\s\W])/giu;
const $inputName = document.getElementById("input-name");
$inputName.addEventListener("input", checkInputNameValue);
function checkInputNameValue() {
  if (this.value.match(regOne)) {
    this.value = this.value.replace(regOne, "");
    this.classList.add("invalid-name");
  } else {
    this.classList.remove("invalid-name");
  }
}

