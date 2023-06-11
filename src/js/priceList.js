if(window.innerWidth < 768) {
  const swiper2 = new Swiper('.swiper3', {
      // modules: [Navigation, Pagination],
      // Default parameters
      pagination: {
          el: ".swiper-pagination3",
          clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 10,
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      },
      
  })
}