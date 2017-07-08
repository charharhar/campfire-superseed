
import '../css/styles.css';

console.log('Application started')

if (module.hot) {
  module.hot.accept();
}

$('.panel-toggle').on('click', function(){
  var panelContent = $(this).next('.panel-content');
  var nextContent = $(this).nextAll('.panel-toggle:first').next();

  if($(this).hasClass('inactive')) {
    panelContent.removeClass('closed').addClass('open');
    $(this).removeClass('inactive').addClass('active');
    $('.open').not(panelContent).addClass('closed').removeClass('open');
    $('.active').not($(this)).addClass('inactive').removeClass('active');
  } else {
    panelContent.removeClass('open').addClass('closed');
    $(this).addClass('inactive').removeClass('active');
    $(this).nextAll('.panel-toggle:first').addClass('active').removeClass('inactive');
    nextContent.removeClass('closed').addClass('open');
  }
});
