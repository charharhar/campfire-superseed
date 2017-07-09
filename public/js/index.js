
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

function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/**
 * Smooth Scroll Handler
 */

const navLinks = sliceArray(document.querySelectorAll('.navLink'));
const mobileNavLinks = sliceArray(document.querySelectorAll('.mobileNavLink'));
const arrowDown = document.querySelector('.arrowDown');
const comingSoonLinks = sliceArray(document.querySelectorAll('.comingSoonLinks'));

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

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', e => {
      hamburger.classList.remove('is-active')
      mobileNavList.classList.remove('is-active')
      wrapper.classList.remove('is-active')
      html.classList.remove('is-active')
      body.classList.remove('is-active')

      scrollTo(e, e.target)
    })
  })

  arrowDown.addEventListener('click', e => {
    let target = e.target;

    target = findParent(target, 'arrowDown');

    scrollTo(e, target);
  })

  comingSoonLinks.forEach(link => {
    link.addEventListener('click', e => {
      scrollTo(e, e.target)
    })
  })

})

// Hamburger mobile event handler
const hamburger = document.querySelector(".hamburger");
const mobileNavList = document.querySelector('.mobile-nav-list');
const wrapper = document.querySelector('.wrapper');
const html = document.querySelector('html');
const body = document.querySelector('body');

function toggleHandler(toggle) {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();

    if (this.classList.contains('is-active') === true) {
      this.classList.remove('is-active')
      mobileNavList.classList.remove('is-active')
      wrapper.classList.remove('is-active')
      html.classList.remove('is-active')
      body.classList.remove('is-active')
    } else {
      this.classList.add('is-active');
      mobileNavList.classList.add('is-active');
      wrapper.classList.add('is-active');
      html.classList.add('is-active')
      body.classList.add('is-active')
    }

  });
}

toggleHandler(hamburger);

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
const eventsButton = document.querySelector('.events-button');

function calculateNewsletterMaxWidth() {
  let inputMaxWidth;
  if (window.innerWidth <= 768) {
    inputMaxWidth = getDistanceFromLeft(eventsButton) + eventsButton.clientWidth - getDistanceFromLeft(inputNewsletter);
  } else {
    inputMaxWidth = getDistanceFromLeft(newsletterButton) - getDistanceFromLeft(inputNewsletter) - 10
  }

  inputNewsletter.style.maxWidth = `${inputMaxWidth}px`;
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
 * Loops Mouseover handler
 */
const sectionLoop = document.querySelector('.section-loop');

sectionLoop.addEventListener('mouseover', e => {
  sectionLoop.classList.add('loop-hovering')
})

sectionLoop.addEventListener('mouseout', e => {
  sectionLoop.classList.remove('loop-hovering')
})

/**
 * Parallax Handling
 */

const parallaxBackground = sliceArray(document.querySelectorAll('.section-image'));

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

const closeButtons = sliceArray(document.querySelectorAll('.location-x-image'));

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(`#${button.getAttribute('data-close')}`)
    target.classList.remove('marker-clicked')
  })
})

const HK_MAP_OPTIONS = {
  map_id: '#hk-map',
  center: { lat: 22.3964, lng: 114.1095 },
  zoom: 10,
  markers: [
    { coords: { lat: 22.3964, lng: 114.1095 }, content: 'hk-1', target: '#hk-content' },
  ],
}

const AUS_MAP_OPTIONS = {
  map_id: '#aus-map',
  center: { lat: -35.2809, lng: 149.1300 },
  zoom: 10,
  markers: [
    { coords: { lat: -35.2809, lng: 149.1300 }, content: 'aus-1', target: '#aus-content' },
  ],
}

const SG_MAP_OPTIONS = {
  map_id: '#sg-map',
  center: { lat: 1.3521, lng: 103.8198 },
  zoom: 10,
  markers: [
    { coords: { lat: 1.3521, lng: 103.8198 }, content: 'sg-1', target: '#sg-content' },
  ],
}

const UK_MAP_OPTIONS = {
  map_id: '#uk-map',
  center: { lat: 51.5074, lng: -0.1278 },
  zoom: 10,
  markers: [
    { coords: { lat: 51.5074, lng: -0.1278 }, content: 'uk-1', target: '#uk-content' },
  ],
}

function generateMapOptions(center, zoom) {
  return {
    center: center,
    zoom: zoom,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [{
      featureType: "all",
      stylers: [{
        saturation: -80
      }]
      }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
          hue: "#d55050"
      }, {
        saturation: 50
      }]
      }, {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [{
          visibility: "off"
      }]
    }],
  }
}

function addMarker(point, map) {
  const { coords, content, target } = point;
  const icon = '/images/section-location/pin.png';

  const marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon,
  })

  google.maps.event.addListener(marker, 'click', (e) => {
    const targetContent = document.querySelector(target)
    targetContent.classList.add('marker-clicked');
    targetContent.setAttribute('data-content', content)
  });
}

window.addEventListener('load', () => {

  function initMap(options) {
    const { map_id, center, zoom, markers } = options;
    const mapOptions = generateMapOptions(center, zoom)
    const map = new google.maps.Map(document.querySelector(map_id), mapOptions);

    markers.forEach(marker => {
      addMarker(marker, map)
    });

  }

  initMap(HK_MAP_OPTIONS);
  initMap(AUS_MAP_OPTIONS);
  initMap(SG_MAP_OPTIONS);
  initMap(UK_MAP_OPTIONS);

})

/**
 * Hot module loader (DEVELOPMENT ONLY)
 */
process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();
