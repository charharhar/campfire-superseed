
import '../css/styles.css';

console.log('Application started')

if (module.hot) {
  module.hot.accept();
}

// Accordion
$(function(){
  $('.panel-toggle').on('click', function() {
    if($('.panel-toggle').hasClass("inactive")) {
      alert('inactive');
    }
  });
});
