const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  });

  const swiperRecommended = new Swiper('.recommended-slider', {
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-button-next',
      prevEl: '.recommended-button-prev',
    },
  });

  const swiperAdd = new Swiper('.add-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-channel-button-next',
      prevEl: '.swiper-channel-button-prev',
    },
  });
