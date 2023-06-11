
const wrapper = document.querySelector('.swiper1')
const expandButton2 = document.querySelector('.expand2')
const brandList = document.querySelector('.brand-list')
const moreButtonIcon2 = document.querySelector(".button__icon2")
expandButton2.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
    wrapper.classList.toggle('swiper-expanded')
    setTimeout(()=>{
        brandList.classList.toggle('expanded')
    }, 300)
    moreButtonIcon2.classList.toggle("more-button--active")
    if(moreButtonIcon2.classList.contains("more-button--active")) {
        expandButton2.children[1].textContent = 'Скрыть'
    } else {
        expandButton2.children[1].textContent = 'Показать всё'
    }
})

if(window.innerWidth < 768) {
    const swiper1 = new Swiper('.swiper1', {
        // modules: [Navigation, Pagination],
        // Default parameters
        pagination: {
            el: ".swiper-pagination1",
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
