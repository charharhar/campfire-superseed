
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

/* Google Maps */
/* HK */
window.addEventListener('load', function() {
  var coords = [
    {lat: 22.248337, lng: 114.166833, zoom: 15}, // hk
    {lat: -33.8688, lng: 151.2093, zoom: 15}, // aus
    {lat: 1.3554, lng: 103.8677, zoom: 15}, // sg
    {lat: 51.5074, lng: -0.1278, zoom: 15} //uk
  ];
  var markers = [];
  var maps = [];

  function showMap() {
      for(var i = 0, length = coords.length; i < length; i++) {
        var center = coords[i];
        var latlng = new google.maps.LatLng(center.lat, center.lng);
        var icon = {
          url: '../images/section-locations/pin.png',
          scaledSize: new google.maps.Size(40,60),
          origin: new google.maps.Point(0,0),
          anchor: new google.maps.Point(0,32)
        };

        maps[i] = new google.maps.Map(document.getElementById('map' + (i + 1)), {
          zoom: center.zoom,
          center: latlng,
          scrollWheel: false,
          mapTypeControl: false
        });

        markers[i] = new google.maps.Marker({
          icon: icon,
          position: latlng,
          map: maps[i]
        });

        $('.location-toggle').on('click', function() {
          google.maps.event.trigger(maps, 'resize');
        });

        google.maps.event.addListener(markers[i], 'click', function () {
          $('.modal').css('display', 'block');
        });
      }

  }
  if($('.locations-content').hasClass("open-location")) {
    showMap();
  }
});

/* Location Modal */
$('.close-x').on('click', function() {
  $('.modal').css('display','none');
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
