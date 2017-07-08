
import '../css/styles.css';
import { polyfill } from './smoothscroll';

/**
 * Utility Functions
 */

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

function getDistanceFromLeft(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  return (rect.left + (window.pageXOffset || docEl.scrollLeft || 0))
}

/**
 * Smooth Scroll Handler
 */

const navLinks = sliceArray(document.querySelectorAll('.navLink'))
const arrowDown = document.querySelector('.arrowDown');

function scrollTo(e, elem) {
  e.preventDefault();

  const target = `.${elem.getAttribute('scrollTo')}`
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });

}

window.addEventListener('load', () => {
  polyfill(); // adds smooth scrolling polyfill

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      scrollTo(e, e.target)
    })
  })

  arrowDown.addEventListener('click', e => {
    let target = e.target;

    target = findParent(target, 'arrowDown');

    scrollTo(e, target);
  })

})

/**
 * Accordion handler
 */

const accordionPlansButtons = sliceArray(document.querySelectorAll('.accordion-plans-button'))
const accordionPlansContents = sliceArray(document.querySelectorAll('.accordion-plans-content'))
const accordionLocationButtons = sliceArray(document.querySelectorAll('.accordion-location-button'))
const accordionLocationContents = sliceArray(document.querySelectorAll('.accordion-location-content'))

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

function calculateNewsletterMaxWidth() {
  let inputMaxWidth = getDistanceFromLeft(newsletterButton) - getDistanceFromLeft(inputNewsletter)
  inputNewsletter.style.maxWidth = `${inputMaxWidth - 10}px`;
}


window.addEventListener('resize', calculateNewsletterMaxWidth)
window.addEventListener('load', calculateNewsletterMaxWidth)

/**
 * WAYPOINT HANDLER
 */
const waypoints = sliceArray(document.querySelectorAll('.waypoint'));

function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  const elemBottom = el.getBoundingClientRect().bottom;
  const elemHeight = el.clientHeight;

  return (
    elemTop <= window.innerHeight &&
    elemBottom <= (window.innerHeight + elemHeight) &&
    elemTop >= (-elemHeight) &&
    elemBottom >= 0
  )
}

function scrolledInAnimationHandler(visible, elem) {
  const animated = elem.classList.contains('animated');
  const enterDirection = elem.getAttribute('data');

  if (visible) {
    elem.classList.add('inView', 'animated-visible')
    elem.classList.remove('notInView', `${enterDirection}-hidden`)
    elem.classList.add('animated')
  } else if (!visible) {
    elem.classList.add('notInView', `${enterDirection}-hidden`)
    elem.classList.remove('animated', 'inView', 'animated-visible')
  }

  // } else if (!visible && !animated) {
  //   elem.classList.add('notInView', `${enterDirection}-hidden`)
  // }
}

function handleAllAnimations() {
  let visible;
  waypoints.forEach(waypoint => {
    let visible = isScrolledIntoView(waypoint)
    scrolledInAnimationHandler(visible, waypoint);
  })
}

window.addEventListener('scroll', handleAllAnimations)
window.addEventListener('load', handleAllAnimations)

/**
 * Google Maps Handling
 */

const parallaxBackground = sliceArray(document.querySelectorAll('.section-image'));

function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function handleParallax(target) {
    let yPos = -scrollTop() / target.getAttribute('data-speed');

    let coords = '50% ' + yPos + 'px';

    target.style.backgroundPosition = coords;
}

parallaxBackground.forEach(section => {
  window.addEventListener('scroll', () => {
    // handleParallax(section);
  })
})

/**
 * Google Maps Handling
 */

window.addEventListener('load', () => {
  let hongkongMap;

  function initMap() {
    hongkongMap = new google.maps.Map(document.querySelector('#hongkong-map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  initMap()

})

/**
 * Hot module loader (DEVELOPMENT ONLY)
 */
process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();
