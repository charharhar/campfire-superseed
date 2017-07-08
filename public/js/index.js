
import '../css/styles.css';

console.log('Application started')

if (module.hot) {
  module.hot.accept();
}

/* Accordion */

$('.panel-toggle').on('click', function(){
  var panelContent = $(this).next('.panel-content');
  var nextContent = $(this).nextAll('.panel-toggle:first').next();
  var chevronArrow = $(this).find('i');

  if($(this).hasClass('inactive')) {
    panelContent.removeClass('closed').addClass('open');
    $(this).removeClass('inactive').addClass('active');
    $('.open').not(panelContent).addClass('closed').removeClass('open');
    $('.active').not($(this)).addClass('inactive').removeClass('active');
    chevronArrow.addClass('fa-chevron-up').removeClass('fa-chevron-down');
  } else {
    panelContent.removeClass('open').addClass('closed');
    $(this).addClass('inactive').removeClass('active');
    $(this).nextAll('.panel-toggle:first').addClass('active').removeClass('inactive');
    nextContent.removeClass('closed').addClass('open');
  }
});

/* Google Maps */
window.onload = function showHK() {
  var hk = new google.maps.LatLng(22.2759, 114.1455);
  var hkMap = new google.maps.Map(document.querySelector(".hk-map"),{
    center: hk,
    zoom: 14
  });
  var marker = new google.maps.Marker({
    position: hk,
    map: hkMap
  });
};

// showHK();
