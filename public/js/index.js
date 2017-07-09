
import '../css/styles.css';

console.log('Application started')

if (module.hot) {
  module.hot.accept();
}

/* Plans accordion */
$('.plans-toggle').on('click', function(){
  var plansContent = $(this).next('.plans-content');
  var nextPlan = $(this).nextAll('.plans-toggle:first').next();
  var plansChevron = $(this).find('i');
  var map = new google.ma

  if($(this).hasClass('inactive')) {
    plansContent.removeClass('closed').addClass('open');
    $(this).removeClass('inactive').addClass('active');
    $('.open').not(plansContent).addClass('closed').removeClass('open');
    $('.active').not($(this)).addClass('inactive').removeClass('active');
    plansChevron.addClass('fa-chevron-up').removeClass('fa-chevron-down');
  } else {
    plansContent.removeClass('open').addClass('closed');
    $(this).addClass('inactive').removeClass('active');
    $(this).nextAll('.plans-toggle:first').addClass('active').removeClass('inactive');
    nextPlan.removeClass('closed').addClass('open');
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

        maps[i] = new google.maps.Map(document.getElementById('map-canvas' + (i + 1)), {
          zoom: center.zoom,
          center: latlng,
          scrollWheel: false,
          mapTypeControl: false
        });

        markers[i] = new google.maps.Marker({
          position: latlng,
          map: maps[i]
        });
        $('.location-toggle').on('click', function() {
          google.maps.event.trigger(maps, 'resize');
        });
      }

  }
  showMap();
});

/* Location accordion*/
$('.location-toggle').on('click', function(){
  var locationContent = $(this).next('.location-wrapper');
  var nextLocation = $(this).nextAll('.location-toggle:first').next();
  var locationChevron = $(this).find('.location-chevron');
  if($(this).hasClass('inactive')) {
    locationContent.removeClass('closed-location').addClass('open-location');
    $(this).removeClass('inactive').addClass('active');
    $('.open-location').not(locationContent).addClass('closed-location').removeClass('open-location');
    $('.active').not($(this)).addClass('inactive').removeClass('active');
    locationChevron.addClass('fa-chevron-up').removeClass('fa-chevron-down');
  } else {
    locationContent.removeClass('open-location').addClass('closed-location');
    $(this).addClass('inactive').removeClass('active');
    $(this).nextAll('.location-toggle:first').addClass('active').removeClass('inactive');
    nextLocation.removeClass('closed-location').addClass('open-location');
  }
});
