
import '../css/styles.css';

console.log('Application started')

const accordionButtons = Array.prototype.slice.call(document.querySelectorAll('.accordion-button'))
const accordionContent = Array.prototype.slice.call(document.querySelectorAll('.accordion-content'))

function handleAccordionClick(e) {
  const target = e.target

  accordionButtons.forEach(button => {
    if (button.getAttribute('id') !== target.getAttribute('id')) {
      button.classList.remove('active-plan');
      button.lastElementChild.classList.add('fa-chevron-right')
      button.lastElementChild.classList.remove('fa-chevron-down')
    }
  })

  accordionContent.forEach(content => {
    if (content.getAttribute('id') !== target.getAttribute('id')) {
      content.classList.remove('active-plan');
    }
  })

  if (target.classList.contains('active-plan')) {
    target.classList.remove('active-plan');
    target.nextElementSibling.classList.remove('active-plan');
    target.lastElementChild.classList.add('fa-chevron-right')
    target.lastElementChild.classList.remove('fa-chevron-down')
  } else {
    target.classList.add('active-plan');
    target.nextElementSibling.classList.add('active-plan');
    target.lastElementChild.classList.add('fa-chevron-down')
    target.lastElementChild.classList.remove('fa-chevron-right')
  }
}

accordionButtons.forEach(button => {
  button.addEventListener('click', handleAccordionClick)
})

if (module.hot) {
  module.hot.accept();
}
