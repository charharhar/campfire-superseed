
import '../css/styles.css';

console.log('Application started')

const accordionPlansButtons = Array.prototype.slice.call(document.querySelectorAll('.accordion-plans-button'))
const accordionPlansContents = Array.prototype.slice.call(document.querySelectorAll('.accordion-plans-content'))
const accordionLocationButtons = Array.prototype.slice.call(document.querySelectorAll('.accordion-location-button'))
const accordionLocationContents = Array.prototype.slice.call(document.querySelectorAll('.accordion-location-content'))

function handleAccordionClick(e, buttons, contents) {
  let target = e.target;

  while (!target.classList.contains('accordion-button')) {
    target = target.parentNode;
  }

  buttons.forEach(button => {
    if (button.getAttribute('id') !== target.getAttribute('id')) {
      button.classList.remove('active-plan');
      button.lastElementChild.classList.add('fa-chevron-right')
      button.lastElementChild.classList.remove('fa-chevron-down')
    }
  })

  contents.forEach(content => {
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

accordionPlansButtons.forEach(button => {
  button.addEventListener('click', e => {
    handleAccordionClick(e, accordionPlansButtons, accordionPlansContents)
  })
})

accordionLocationButtons.forEach(button => {
  button.addEventListener('click', e => {
    handleAccordionClick(e, accordionLocationButtons, accordionLocationContents)
  })
})

if (module.hot) {
  module.hot.accept();
}
