const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
	a11y: {
		paginationBulletMessages: 'Название {{index}}',
	}
});

const spanSlider = document.querySelectorAll('.swiper-pagination-bullet');
spanSlider.textContent = 'hello world'