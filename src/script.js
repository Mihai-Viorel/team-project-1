const swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  // effect: 'slide',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return (
        '0' +
        current +
        ' <span class="pagination-separater"></span> ' +
        '0' +
        total
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log("test")