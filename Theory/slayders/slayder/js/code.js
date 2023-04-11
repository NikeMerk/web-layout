const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,

  // Настройка пагенации
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

	// это для того что бы пагинация была кликабельной
	a11y: {
		paginationBulletMessage: `Тут название слайда {{index}}`,
	}
});