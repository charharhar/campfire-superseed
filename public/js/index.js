
import '../css/styles.css';

console.log('Application started')

if (module.hot) {
  module.hot.accept();
}

/* Smooth Scrolling */
function scrollTo(className) {
$('html, body').animate({
    scrollTop: $(className).offset().top
  }, 500);
};

/* Mobile nav -- Hamburger */
$('.hamburger').on('click', function(){
  $($(this)).toggleClass("open");
  $('.mobile-nav').toggleClass("open");
});

/* Sticky Nav */

$(window).on("scroll",function() {
  var stickyNav = $('.sticky-nav');
  var offset = Math.floor($(window).outerHeight() / 2);

  if($(window).scrollTop() > offset) {
    stickyNav.addClass("sticky");
  }
  else {
    stickyNav.removeClass("sticky");
  }
});

/* Plans accordion */
$('.plans-toggle').on('click', function(){

  var plansContent = $(this).next('.plans-content');
  var nextPlan = $(this).nextAll('.plans-toggle:first');
  var plansChevron = $(this).children('.plans-chevron');

  if($(this).hasClass('inactive')) {

    plansContent.toggleClass('closed open');
    $(this).toggleClass('inactive active');
    $('.open').not(plansContent).toggleClass('open closed');
    $('.active').not($(this)).toggleClass('active inactive');
    $('.plans-accordion .fa-chevron-up').not($(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    plansChevron.removeClass('fa-chevron-down').addClass('fa-chevron-up');

  } else {

    plansContent.toggleClass('open closed');
    $(this).toggleClass('inactive active');
    $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    $(this).nextAll('.plans-toggle:first').addClass('active').removeClass('inactive');
    $('.plans-accordion .fa-chevron-up').not($(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    nextPlan.children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    nextPlan.next().toggleClass('closed open');

  }

});

/* Google Maps */
/* HK */
const HK_Map_Details = {
  map_id: '#hk-map',
  center: {lat: 22.248337, lng: 114.166833},
  zoom: 12,
  markers: [
    // Kennedy Town
    {
      coords: {lat: 22.280789, lng: 114.129113},
      content: 'HK_1',
      target: '#hk-content'
    },
    // Wong Chuk Hang
    {
      coords: {lat: 22.248337, lng: 114.166833},
      content: 'HK_2',
      target: '#hk_content'
    },
    // Quarry Bay
    {
      coords: {lat: 22.287823, lng: 114.209737},
      content: 'HK_3',
      target: '#hk_content'
    },
    // Tai Koo
    {
      coords: {lat: 22.284733, lng: 114.215546},
      content: 'HK_4',
      target: '#hk_content'
    },
    // Sam Shui Po
    {
      coords: {lat: 22.331028, lng: 114.161816},
      content: 'HK_5',
      target: '#hk_content'
    },
    // Tseung Kwan O
    {
      coords: {lat: 22.307441, lng: 114.260011},
      content: 'HK_6',
      target: '#hk_content'
    },
  ],
}

/* AU */
const AU_Map_Details = {
  map_id: '#au-map',
  center: {lat: -33.8688, lng: 151.2093},
  zoom: 9,
  markers: [
    {
      coords: {lat: -33.8688, lng: 151.2093},
      content: 'AU_1',
      target: '#au_content'
    },
  ],
}

/* SG */
// const SG_Map_Details = {
//   map_id: '#sg-map',
//   center: {lat: 1.3554, lng: 103.8677},
//   zoom: 12,
//   markers: [
//     {
//       coords: {lat: 1.3554, lng: 103.8677},
//       content: 'SG_1',
//       target: '#sg_content'
//     },
//   ],
// }

/* UK*/
const UK_Map_Details = {
  map_id: '#uk-map',
  center: {lat: 51.5074, lng: -0.1278},
  zoom: 12,
  markers: [
    {
      coords: {lat: 51.5074, lng: -0.1278},
      content: 'UK_1',
      target: '#uk_content'
    },
  ],
}

// Map options -- zoom, streetview control, etc. go here
function setMapOptions(center, zoom) {
  return {
    center: center,
    zoom: zoom,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false
  }
}

// Add location markers to map
function addMarker(point, map) {
  const {coords, content, target} = point;
  const icon = {
    url: '../images/section-locations/pin.png',
    scaledSize: new google.maps.Size(33,50),
  }

  const marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon: icon,
  })

  // Add event listener to map markers
  google.maps.event.addListener(marker, 'click', (e) => {
    const targetTab = document.querySelector(`[data-context="${content}"]`);
    !!targetTab && locationTabChange(targetTab, target);
  });
}

// Initialise map
window.addEventListener('load', function(){

  function startMap(options) {
    const {map_id, center, zoom, markers} = options;
    const mapOptions = setMapOptions(center, zoom);
    const map = new google.maps.Map(document.querySelector(map_id), mapOptions);

    markers.forEach(marker => {
      addMarker(marker, map)
    });
  }

  // Initialise maps
  startMap(HK_Map_Details);
  startMap(AU_Map_Details);
  // startMap(SG_Map_Details);
  startMap(UK_Map_Details);

});

/* Location Tab Swap */
var HK_Locations = {
  HK_1: {
    open: true,
    name: 'Kennedy Town',
    tableData: {
      industry: 'Tech',
      address: '4/F, Cheung Hing Industrial Building, <br> 12P Smithfield, Kennedy Town <br> Hong Kong',
      contact: 'hello.kt@campfire.work',
    },
    images: [
      '../images/section-locations/locations-kt/kt-1.png',
      '../images/section-locations/locations-kt/kt-2.png',
      '../images/section-locations/locations-kt/kt-3.png',
      '../images/section-locations/locations-kt/kt-4.png',
      '../images/section-locations/locations-kt/kt-5.png',
    ],
  },
  HK_2: {
    open: true,
    name: 'Wong Chuk Hang',
    tableData: {
      industry: 'Fashion',
      address: '5/F, Remex Centre, <br> 42 Wong Chuk Hang Road, <br> Hong Kong',
      contact: 'hello.wch@campfire.work'
    },
    images: [
      '../images/section-locations/locations-wch/wch-1.png',
      '../images/section-locations/locations-wch/wch-2.png',
      '../images/section-locations/locations-wch/wch-3.png',
      '../images/section-locations/locations-wch/wch-4.png',
      '../images/section-locations/locations-wch/wch-5.png'
    ],
  },
  HK_3: {
    open: false,
    name: 'Quarry Bay',
    tableData: {
      message: 'Coming Soon',
    },
    images: [],
  },
  HK_4: {
    open: false,
    name: 'Tai Koo',
    tableData: {
      message: 'Coming Soon',
    },
    images: [],
  },
  HK_5: {
    open: false,
    name: 'Sham Shui Po',
    tableData: {
      message: 'Coming Soon',
    },
    images: [],
  },
  HK_6: {
    open: false,
    name: 'Tseung Kwan O',
    tableData: 'Coming Soon',
  },
    images: [],
  }

const locationTabs = $('.location-tab');
// const locationTabList = $('.tab-list');

function generateAddressTable(data) {
  // console.log(data);
  return `
    <div class="row tab-list-blank">
    </div>
    <div class="row">
      <table class="white-text address-table small-text">
        <tr>
            <td class="table-left">Industry:</td>
            <td>${data.industry}</td>
        </tr>
        <tr>
            <td class="table-left">Address:</td>
            <td>${data.address}</td>
        </tr>
        <tr>
            <td class="table-left">Contact:</td>
            <td>${data.contact}</td>
        </tr>
      </table>
    </div>
  `
}

function generateComingSoon() {
  return `
    <h1 class="white-text medium-text">COMING SOON</h1>
    <h2 class="white-text normal-text">Be the first to know!</h2>
    <a href="" class="button red-button normal-button">Contact Us</a>
  `
}

function generateSlider(image, classType) {
  const div = document.createElement('div');
  const img = document.createElement('img');

  img.setAttribute('src', image);
  img.className = classType;
  div.appendChild(img);

  return div;
}

function locationTabChange(tab, targetID) {
  const locationDetails = $('#hk-modal');
  // const targetContent = document.querySelector(targetID);
  const locationData = HK_Locations[tab.getAttribute('data-context')];
  const locationLeft = document.createElement('div');
  const locationRight = document.createElement('div');
  const slider = document.createElement('div');
  const sliderFor = document.createElement('div');
  const sliderNav = document.createElement('div');

  locationLeft.className = "col col-xs-4 location-left";
  locationRight.className = "col col-xs-8 hidden-xs location-right";
  slider.className = "slider";
  sliderFor.className = "slider-for";
  sliderNav.className = "slider-nav";

  locationDetails.addClass("open-modal");
  $('.close-modal').css('opacity', '0.7');

  if(locationData.open) {
    locationDetails.empty();
    locationDetails.show();
    $(locationLeft).appendTo(locationDetails);
    $(locationRight).appendTo(locationDetails);
    locationDetails.removeClass('coming-soon');

    $(locationLeft).append(generateAddressTable(locationData.tableData));

    locationRight.append(slider);

    locationData.images.forEach(image => {
      sliderFor.append(generateSlider(image, 'slider-img'))
    })

    locationData.images.forEach(image => {
      sliderNav.append(generateSlider(image, 'slider-thumb'))
    })

    slider.append(sliderFor);
    slider.append(sliderNav);

    // Image slider
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
      centerMode: true,
      arrows: true,
      dots: false,
      focusOnSelect: true
    });
  }
  else {
    locationDetails.show();
    locationDetails.empty();
    locationDetails.addClass("coming-soon");
    locationDetails.append(generateComingSoon());
  }
}

locationTabs.on('click', function() {
  const tabDetails = $(this)[0];
  console.log(tabDetails);
  locationTabChange(tabDetails);
});

/* Location accordion*/
$('.locations-toggle').on('click', function(){
  var locationContent = $(this).next('.locations-content');
  var nextLocation = $(this).nextAll('.locations-toggle:first').next();
  var locationChevron = $(this).children('i');

  if($(this).hasClass('inactive-location')) {

    locationContent.toggleClass('closed-location open-location');
    $(this).toggleClass('inactive-location active-location');
    $('.open-location').not(locationContent).toggleClass('closed-location open-location');
    $('.active-location').not($(this)).toggleClass('inactive-location active-location');
    $('.locations-container .fa-chevron-up').not($(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    locationChevron.removeClass('fa-chevron-down').addClass('fa-chevron-up');

  } else {

    locationContent.toggleClass('open-location closed-location')
    $(this).toggleClass('inactive-location active-location');
    $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    $(this).nextAll('.locations-toggle:first').addClass('active-location').removeClass('inactive-location');
    $('.locations-container .fa-chevron-up').not($(this)).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    $(this).nextAll('.locations-toggle:first').children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    nextLocation.toggleClass('closed-location open-location');

  }
});

/* Close location details */
$('.close-modal').on('click', function(){
  console.log('okay');
  $('#hk-modal').hide();
  $('.close-modal').css('opacity', '0');
});

/* Stay in the loop background image thing */
$('#loop-text-container').on('mousemove', function(e) {
  var leftmoveX = (e.pageX * - 1/15);
  var leftmoveY = (e.pageY * - 1/40);
  var rightmoveX = (e.pageX * - 1/30);
  var rightmoveY = (e.pageY * - 1/15);
  $('#loop-left').css('transform', 'translate3d(' + leftmoveX + 'px, ' + rightmoveX + 'px, 0)');
  $('#loop-right').css('transform', 'translate3d(' + rightmoveX +'px, ' + rightmoveY +'px, 0)');
});

