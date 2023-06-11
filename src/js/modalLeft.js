const toggleLeftModalButton = document.querySelector('.header__menu')
export const modalLeft = document.querySelector('.modal-left')
export const contentPart = document.querySelector('.content-part')
toggleLeftModalButton.addEventListener('click', e=>{
  e.stopPropagation()
  e.preventDefault()
  LeftModalEvent()
})
// const closeLeftModal = LeftModal.querySelector('.close')
// closeLeftModal.addEventListener('click', e=>{
//   e.stopPropagation()
//   e.preventDefault()
//   LeftModalEvent()
// })

const LeftModalEvent = () => {
  modalLeft.classList.toggle('modal-left--active')
  if(modalLeft.classList.contains('modal-left--active')) {
      contentPart.classList.add('whileModalActive') 
  } else {
      contentPart.classList.remove('whileModalActive')
  }
}

export default {
  modalLeft: modalLeft,
  contentPart: contentPart
}