const expandButton1 = document.querySelector('.block1-2-expand')
const info = document.querySelector('.info')
const moreButtonIcon1 = document.querySelector(".button__icon1")
expandButton1.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()
  info.classList.toggle('info--expanded')
  moreButtonIcon1.classList.toggle("more-button--active")
  if(moreButtonIcon1.classList.contains("more-button--active")) {
    expandButton1.children[1].textContent = 'Скрыть'
  } else {
    expandButton1.children[1].textContent = 'Читать далее'
  }
})