import {modalLeft, contentPart} from "./modalLeft"

const feedBackButtons = document.querySelectorAll('.recFeedBack')
const callButtons = document.querySelectorAll('.recCall')
const feedBackModal = document.querySelector('.modalFeedback')
const callModal = document.querySelector('.modalCall')
const buttonsClose = document.querySelectorAll('.close')


buttonsClose.forEach( btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    modalClose()
  })
})

feedBackButtons.forEach( btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    openModal(e.target.name)
  })
})

callButtons.forEach( btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    openModal(e.target.name)
  })
})

const openModal = modal => {
  modalClose()
  if(modal=='call') {
    callModal.classList.add('modal-right--active')
  } 
  if (modal=='feedback') {
    feedBackModal.classList.add('modal-right--active')
  }
  contentPart.classList.add('whileModalActive') 
  contentPart.addEventListener('click', e=> {
    e.preventDefault()
    e.stopPropagation()
    modalClose()
  })
}

const modalClose = () => {
  modalLeft.classList.remove('modal-left--active')
  feedBackModal.classList.remove('modal-right--active')
  callModal.classList.remove('modal-right--active')
  contentPart.classList.remove('whileModalActive')
  contentPart.removeEventListener('click', e=> {
    e.preventDefault()
    e.stopPropagation()
    modalClose()
  })
}