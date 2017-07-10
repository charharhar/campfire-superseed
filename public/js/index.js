
import '../css/styles.css';
import { polyfill } from './smoothscroll';

/**
 * Utility Functions
 */

function removeAllChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

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
const stickyNavLinks = sliceArray(document.querySelectorAll('.stickyNavLink'));
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

  stickyNavLinks.forEach(link => {
    link.addEventListener('click', e => {
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
const sectionAbout = document.querySelector('.section-about');
const stickyNav = document.querySelector('.sticky-nav-list');

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

window.addEventListener('scroll', e => {
  if (document.body.scrollTop > ( window.outerHeight / 2)) {
    stickyNav.classList.add('sticky-nav-list-active');
  } else {
    stickyNav.classList.remove('sticky-nav-list-active');
  }
})

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

// const parallaxBackground = sliceArray(document.querySelectorAll('.section-image'));

// function handleParallax(target) {
//     let yPos = -scrollTop() / target.getAttribute('data-speed');

//     let coords = '50% ' + yPos + 'px';

//     target.style.backgroundPosition = coords;
// }

// parallaxBackground.forEach(section => {
//   window.addEventListener('scroll', () => {
//     handleParallax(section);
//   })
// })

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

const GOOGLE_MAPS_STYLE = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#efb551"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a2cce8"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

const HK_MAP_OPTIONS = {
  map_id: '#hk-map',
  center: { lat: 22.265763, lng: 114.167980 },
  zoom: 12,
  markers: [
    {
      coords: { lat: 22.280789, lng: 114.129113 },
      content: 'HK_1',
      target: '#hk-content'
    },
    {
      coords: { lat: 22.248338, lng: 114.166835 },
      content: 'HK_2',
      target: '#hk-content'
    },
    {
      coords: { lat: 22.287823, lng: 114.209737 },
      content: 'HK_3',
      target: '#hk-content',
    },
    {
      coords: { lat: 22.284733, lng: 114.215546 },
      content: 'HK_4',
      target: '#hk-content',
    },
    {
      coords: { lat: 22.331028, lng: 114.161816 },
      content: 'HK_5',
      target: '#hk-content',
    },
    {
      coords: { lat: 22.307441, lng: 114.260011 },
      content: 'HK_6',
      target: '#hk-content',
    },
  ],
}

const AUS_MAP_OPTIONS = {
  map_id: '#aus-map',
  center: { lat: -33.8688, lng: 151.2093 },
  zoom: 10,
  markers: [
    {
      coords: { lat: -33.8688, lng: 151.2093 },
      content: 'aus-1',
      target: '#aus-content'
    },
  ],
}

const SG_MAP_OPTIONS = {
  map_id: '#sg-map',
  center: { lat: 1.3521, lng: 103.8198 },
  zoom: 10,
  markers: [
    {
      coords: { lat: 1.3521, lng: 103.8198 },
      content: 'sg-1',
      target: '#sg-content'
    },
  ],
}

const UK_MAP_OPTIONS = {
  map_id: '#uk-map',
  center: { lat: 51.5074, lng: -0.1278 },
  zoom: 10,
  markers: [
    {
      coords: { lat: 51.5074, lng: -0.1278 },
      content: 'uk-1',
      target: '#uk-content'
    },
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
    styles: GOOGLE_MAPS_STYLE,
  }
}

function addMarker(point, map) {
  const { coords, content, target } = point;
  const icon = {
    url: '/images/section-location/location-pin.png',
    scaledSize: new google.maps.Size(25, 41.48),
  }

  const marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon,
  })

  google.maps.event.addListener(marker, 'click', (e) => {
    const targetContent = document.querySelector(target)
    targetContent.classList.add('marker-clicked');
    const targetButton = document.querySelector(`[data-context="${content}"]`)
    !!targetButton && locationChangeHandler(targetButton);
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
 * Location Swap handler
 */

const HK_LOCATIONS = {
  HK_1: {
    soon: false,
    name: 'Kennedy Town',
    tableData: {
      industry: 'Tech',
      address: '4/F, Cheung Hing Industrial Building, <br> 12P Smithfield, Kennedy Town <br> Hong Kong',
      contact: 'hello.kt@campfire.work',
    },
    images: [
      '/images/section-location/photo2.png',
      '/images/section-location/photo1.png',
      '/images/section-location/photo3.png',
    ],
  },

  HK_2: {
    soon: false,
    name: 'Wong Chuk Hang',
    tableData: {
      industry: 'Fashion',
      address: '5/F, Remex Centre, <br> 42 Wong Chuk Hang Road. <br> Hong Kong',
      contact: 'hello.wch@campfire.work',
    },
    images: [
      '/images/section-location/photo1.png',
      '/images/section-location/photo3.png',
      '/images/section-location/photo2.png',
    ],
  },

  HK_3: {
    soon: true,
    name: 'Quarry Bay',
    tableData: {
      message: 'Coming soon',
    },
    images: [
      '/images/section-location/photo3.png',
      '/images/section-location/photo2.png',
      '/images/section-location/photo1.png',
    ],
  },

  HK_4: {
    soon: true,
    name: 'Tai Koo',
    tableData: {
      message: 'Coming soon',
    },
    images: [
      '/images/section-location/photo1.png',
      '/images/section-location/photo2.png',
      '/images/section-location/photo3.png',
    ],
  },

  HK_5: {
    soon: true,
    name: 'Sham Shui Po',
    tableData: {
      message: 'Coming soon',
    },
    images: [
      '/images/section-location/photo2.png',
      '/images/section-location/photo3.png',
      '/images/section-location/photo1.png',
    ],
  },

  HK_6: {
    soon: true,
    name: 'Tseung Kwan O',
    tableData: {
      message: 'Coming soon',
    },
    images: [
      '/images/section-location/photo3.png',
      '/images/section-location/photo1.png',
      '/images/section-location/photo2.png',
    ],
  },
}

const locationButtons = sliceArray(document.querySelectorAll('.location-button'));
const locationDetails = document.querySelector('.location-details');
const locationRightWrapper = document.querySelector('.location-right-wrapper');

function generateDetailsTemplate(data) {
  return `
    <table>
      <tr>
        <td class="table-head campWhite">Industry:</td>
        <td class="table-body campWhite">${data.industry}</td>
      </tr>
      <tr>
        <td class="table-head campWhite">Address:</td>
        <td class="table-body campWhite">${data.address}</td>
      </tr>
      <tr>
        <td class="table-head campWhite">Contact:</td>
        <td class="table-body campWhite">${data.contact}</td>
      </tr>
    </table>
  `
}

function generateSoonTemplate() {
  return `
    <h2 class="campWhite medium-regular">Coming soon</h2>
    <p class="campWhite">Be the first to know! <br> Subscribe to our newsletter</p>
    <a href="" class="button small-regular button-red comingSoonLink" scrollTo="section-loop">Sign Me Up</a>
  `
}

function generateSlide(image, slideType) {
  const div = document.createElement('div');
  const figure = document.createElement('figure');
  const img = document.createElement('img');

  figure.classList.add(slideType);
  img.setAttribute('src', image)

  figure.appendChild(img)
  div.appendChild(figure)

  return div;
}

function locationChangeHandler(button) {
  const context = HK_LOCATIONS[button.getAttribute('data-context')];
  const sliderFor = document.createElement('div');
  const sliderNav = document.createElement('div');
  let detailsTemplate;

  locationButtons.forEach(btn => {
    btn.classList.remove('active-location');
  })

  button.classList.add('active-location')

  if (context.soon) {
    detailsTemplate = generateSoonTemplate()
  } else {
    detailsTemplate = generateDetailsTemplate(context.tableData);
  }

  removeAllChildren(locationDetails);
  locationDetails.innerHTML = detailsTemplate;

  const comingSoonLink = document.querySelector('.comingSoonLink');

  if (!!comingSoonLink) {
    comingSoonLink.addEventListener('click', e => {
      scrollTo(e, e.target)
    })
  }

  sliderFor.classList.add('slider-for');
  sliderNav.classList.add('slider-nav');

  context.images.forEach(image => {
    sliderFor.appendChild(generateSlide(image, 'slider-for-image'))
  })
  context.images.forEach(image => {
    sliderNav.appendChild(generateSlide(image, 'slider-nav-image'))
  })

  removeAllChildren(locationRightWrapper)
  locationRightWrapper.appendChild(sliderFor);
  locationRightWrapper.appendChild(sliderNav);

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
  });
}

locationButtons.forEach(button => {
  button.addEventListener('click', e => {
    locationChangeHandler(button);
  });
})

/**
 * Hot module loader (DEVELOPMENT ONLY)
 */
process.env.NODE_ENV === 'development' && module.hot && module.hot.accept();
