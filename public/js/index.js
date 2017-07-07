
import '../css/styles.css';

/**
 * Accordion handler
 */

const accordionPlansButtons = sliceArray(document.querySelectorAll('.accordion-plans-button'))
const accordionPlansContents = sliceArray(document.querySelectorAll('.accordion-plans-content'))
const accordionLocationButtons = sliceArray(document.querySelectorAll('.accordion-location-button'))
const accordionLocationContents = sliceArray(document.querySelectorAll('.accordion-location-content'))

function findParent(node, className) {
  let tempNode = node;

  while (!tempNode.classList.contains(className)) {
    tempNode = tempNode.parentNode;
  }

  return tempNode
}

function sliceArray(nodeArray) {
  return Array.prototype.slice.call(nodeArray)
}

function handleAccordionClick(e, buttons, contents) {
  let target = e.target;

  target = findParent(target, 'accordion-button')

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

/**
 * Newsletter Input CSS listener
 */

const inputNewsletter = document.querySelector('input[name="newsletter"]');
const newsletterButton = document.querySelector('.newsletter-button');

function getDistanceFromLeft(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  return (rect.left + (window.pageXOffset || docEl.scrollLeft || 0))
}

function calculateNewsletterMaxWidth() {
  let inputMaxWidth = getDistanceFromLeft(newsletterButton) - getDistanceFromLeft(inputNewsletter)
  inputNewsletter.style.maxWidth = `${inputMaxWidth - 10}px`;
}


window.addEventListener('resize', calculateNewsletterMaxWidth)
window.addEventListener('load', calculateNewsletterMaxWidth)

/**
 * Hot module loader (DEVELOPMENT ONLY)
 */
process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();
