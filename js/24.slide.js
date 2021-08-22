const swiper = new Swiper('.swiper-container', {
  loop: true,
	effect: "fade",
	autoplay: true,
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});