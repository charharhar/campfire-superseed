
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

/* Plans accordion */
$('.plans-toggle').on('click', function(){
  var plansContent = $(this).next('.plans-content');
  var nextPlan = $(this).nextAll('.plans-toggle:first');
  var plansChevron = $(this).find('.plans-chevron');

  if($(this).hasClass('inactive')) {
    plansContent.removeClass('closed').addClass('open');
    $(this).removeClass('inactive').addClass('active');
    $('.open').not(plansContent).addClass('closed').removeClass('open');
    $('.active').not($(this)).addClass('inactive').removeClass('active');
    plansChevron.addClass('fa-chevron-up').removeClass('fa-chevron-down');
  } else {
    plansContent.removeClass('open').addClass('closed');
    $(this).addClass('inactive').removeClass('active');
    plansChevron.addClass('fa-chevron-down').removeClass('fa-chevron-up');
    $(this).nextAll('.plans-toggle:first').addClass('active').removeClass('inactive');
    nextPlan.next().removeClass('closed').addClass('open');
    nextPlan.find('.plans-chevron').removeClass('fa-chevron-down').addClass('fa-chevron-up');
  }
});

/* Location Tab Swap */
var HK_Locations = {
  HK_1: {
    open: true,
    name: 'Kennedy Town',
    tableData: {
      industry: 'tech',
      address: '4/F, Cheung Hing Industrial Building, <br> 12P Smithfield, Kennedy Town <br> Hong Kong',
      contact: 'hello.kt@campfire.work',
    },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  },
  HK_2: {
    open: true,
    name: 'Wong Chuk Hang',
    tableData: {
      industry: 'fashion',
      address: '5/F, Remex Centre, <br> 42 Wong Chuk Hang Road, <br> Hong Kong',
      contact: 'hello.wch@campfire.work'
    },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  },
  HK_3: {
    open: false,
    name: 'Quarry Bay',
    tableData: {
      message: 'Coming Soon',
    },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  },
  HK_4: {
    open: false,
    name: 'Tai Koo',
    tableData: {
      message: 'Coming Soon',
    },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  },
  HK_5: {
    open: false,
    name: 'Sham Shui Po',
    tableData: {
      message: 'Coming Soon',
    },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  },
  HK_6: {
    open: false,
    name: 'Tseung Kwan O',
    tableData: 'Coming Soon',
  },
    images: [
      '../images/section-locations/photo1.png',
      '../images/section-locations/photo2.png',
      '../images/section-locations/photo3.png',
    ],
  }


var locationTab = $('.location-tab');
var tabList = $('.tab-list');
var locationWrapper = $('.location-column');

// Generate modal windows
function generateAddressTable(data) {
  return `
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
  `
}

function generateComingSoon() {
  return `
    <h1 class="white-text large-text">Coming Soon</h2>
    <h2 class="white-text normal-text">Be the first to know!</h2>
  `
}
/* Google Maps */
/* HK */
var HK_Map_Details = [{
  mapTarget: '#hk-map',
  center: {lat: 22.248337, lng: 114.166833},
  zoom: 15,
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
      coords: {lat: 22.248337, lng: 114.166833},
      content: 'HK_3',
      target: '#hk_content'
    },
    // Tai Koo
    {
      coords: {lat: 22.248337, lng: 114.166833},
      content: 'HK_4',
      target: '#hk_content'
    },
    // Sam Shui Po
    {
      coords: {lat: 22.248337, lng: 114.166833},
      content: 'HK_5',
      target: '#hk_content'
    },
    // Tseung Kwan O
    {
      coords: {lat: 22.248337, lng: 114.166833},
      content: 'HK_6',
      target: '#hk_content'
    },
  ],
}]

/* AU */
var AU_Map_Details = [{
  mapTarget: '#au-map',
  center: {lat: -33.8688, lng: 151.2093},
  zoom: 12,
  markers: [
    {
      coords: {lat: -33.8688, lng: 151.2093},
      content: 'AU_1',
      target: '#au_content'
    },
  ],
}]

/* SG */
var SG_Map_Details = [{
  mapTarget: '#sg-map',
  center: {lat: 1.3554, lng: 103.8677},
  zoom: 12,
  markers: [
    {
      coords: {lat: 1.3554, lng: 103.8677},
      content: 'SG_1',
      target: '#sg_content'
    },
  ],
}]

/* UK*/
var UK_Map_Details = [{
  mapTarget: '#uk-map',
  center: {lat: 51.5074, lng: -0.1278},
  zoom: 12,
  markers: [
    {
      coords: {lat: 51.5074, lng: -0.1278},
      content: 'UK_1',
      target: '#uk_content'
    },
  ],
}]

// Map options -- zoom, streetview control, etc. go here
function mapOptions(center, zoom) {
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
  var point = {coords, content, target};
  var icon = {
    url: '../images/section-locations/pin.png',
    scaledSize: new google.maps.Size(40,60),
  }

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    icon,
  })

  // Add event listener to map markers
  google.maps.event.addListener(marker, 'click', (e) => {
    var targetTab = document.querySelector(`[data-context="${content}"]`);
    !!targetTab && locationTabChange(targetTab, target);
  });
}

// Initialise map
window.addEventListener('load', function(){

  function showMap(options) {
    var mapTarget =
    var options = {mapTarget, center, zoom, markers};
    var mapOptions = mapOptions(center, zoom);
    var map = new google.maps.Map(document.querySelector(mapTarget), mapOptions);

    markers.forEach(marker => {
      addMarker(marker, map)
    });
  }

  // Initialise maps
  showMap(HK_Map_Details);
  showMap(AU_Map_Details);
  // showMap(SG_Map_Details);
  showMap(UK_Map_Details);
});




/* Location accordion*/
$('.locations-toggle').on('click', function(){
  var locationContent = $(this).next('.locations-content');
  var nextLocation = $(this).nextAll('.locations-toggle:first').next();
  var locationChevron = $(this).find('.locations-chevron');
  if($(this).hasClass('inactive-location')) {
    locationContent.removeClass('closed-location').addClass('open-location');
    $(this).removeClass('inactive-location').addClass('active-location');
    $('.open-location').not(locationContent).addClass('closed-location').removeClass('open-location');
    $('.active-location').not($(this)).addClass('inactive-location').removeClass('active-location');
    locationChevron.addClass('fa-chevron-up').removeClass('fa-chevron-down');
  } else {
    locationContent.removeClass('open-location').addClass('closed-location');
    $(this).addClass('inactive-location').removeClass('active-location');
    $(this).nextAll('.locations-toggle:first').addClass('active-location').removeClass('inactive-location');
    nextLocation.removeClass('closed-location').addClass('open-location');
  }
});

/* Image slider */
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  centerPadding: 10,
  arrows: true,
  dots: false,
  focusOnSelect: true
});


$('#loop-text-container').on('mousemove', function(e) {
  var leftmoveX = (e.pageX * - 1/15);
  var leftmoveY = (e.pageY * - 1/40);
  var rightmoveX = (e.pageX * - 1/30);
  var rightmoveY = (e.pageY * - 1/15);
  $('#loop-left').css('transform', 'translate3d(' + leftmoveX + 'px, ' + rightmoveX + 'px, 0)');
  $('#loop-right').css('transform', 'translate3d(' + rightmoveX +'px, ' + rightmoveY +'px, 0)');
});

