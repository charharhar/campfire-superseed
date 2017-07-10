'use strict';function removeAllChildren(a){for(;a.hasChildNodes();)a.removeChild(a.lastChild)}function findParent(a,b){for(var c=a;!c.classList.contains(b);)c=c.parentNode;return c}function sliceArray(a){return Array.prototype.slice.call(a)}function getDistanceFromLeft(a){var b=a.getBoundingClientRect(),c=document.documentElement;return b.left+(window.pageXOffset||c.scrollLeft||0)}function scrollTop(){return window.pageYOffset===void 0?(document.documentElement||document.body.parentNode||document.body).scrollTop:window.pageYOffset}function scrollTo(a,b){a.preventDefault();var c='.'+b.getAttribute('scrollTo');$('html, body').animate({scrollTop:$(c).offset().top},1e3)}var navLinks=sliceArray(document.querySelectorAll('.navLink')),mobileNavLinks=sliceArray(document.querySelectorAll('.mobileNavLink')),stickyNavLinks=sliceArray(document.querySelectorAll('.stickyNavLink')),arrowDown=document.querySelector('.arrowDown'),comingSoonLinks=sliceArray(document.querySelectorAll('.comingSoonLinks'));window.addEventListener('load',function(){navLinks.forEach(function(a){a.addEventListener('click',function(b){scrollTo(b,b.target)})}),mobileNavLinks.forEach(function(a){a.addEventListener('click',function(b){hamburger.classList.remove('is-active'),mobileNavList.classList.remove('is-active'),wrapper.classList.remove('is-active'),html.classList.remove('is-active'),body.classList.remove('is-active'),scrollTo(b,b.target)})}),stickyNavLinks.forEach(function(a){a.addEventListener('click',function(b){scrollTo(b,b.target)})}),arrowDown.addEventListener('click',function(a){var b=a.target;b=findParent(b,'arrowDown'),scrollTo(a,b)}),comingSoonLinks.forEach(function(a){a.addEventListener('click',function(b){scrollTo(b,b.target)})})});var hamburger=document.querySelector('.hamburger'),mobileNavList=document.querySelector('.mobile-nav-list'),wrapper=document.querySelector('.wrapper'),html=document.querySelector('html'),body=document.querySelector('body');function toggleHandler(a){a.addEventListener('click',function(b){b.preventDefault(),!0===this.classList.contains('is-active')?(this.classList.remove('is-active'),mobileNavList.classList.remove('is-active'),wrapper.classList.remove('is-active'),html.classList.remove('is-active'),body.classList.remove('is-active')):(this.classList.add('is-active'),mobileNavList.classList.add('is-active'),wrapper.classList.add('is-active'),html.classList.add('is-active'),body.classList.add('is-active'))})}toggleHandler(hamburger);var accordionPlansButtons=sliceArray(document.querySelectorAll('.accordion-plans-button')),accordionPlansContents=sliceArray(document.querySelectorAll('.accordion-plans-content')),accordionLocationButtons=sliceArray(document.querySelectorAll('.accordion-location-button')),accordionLocationContents=sliceArray(document.querySelectorAll('.accordion-location-content'));function handleAccordionClick(a,b,c){var d=a.target;d=findParent(d,'accordion-button'),b.forEach(function(f){f.getAttribute('id')!==d.getAttribute('id')&&(f.classList.remove('active-plan'),f.lastElementChild.classList.add('fa-chevron-right'),f.lastElementChild.classList.remove('fa-chevron-down'))}),c.forEach(function(f){f.getAttribute('id')!==d.getAttribute('id')&&f.classList.remove('active-plan')}),d.classList.contains('active-plan')?(d.classList.remove('active-plan'),d.nextElementSibling.classList.remove('active-plan'),d.lastElementChild.classList.add('fa-chevron-right'),d.lastElementChild.classList.remove('fa-chevron-down')):(d.classList.add('active-plan'),d.nextElementSibling.classList.add('active-plan'),d.lastElementChild.classList.add('fa-chevron-down'),d.lastElementChild.classList.remove('fa-chevron-right'))}accordionPlansButtons.forEach(function(a){a.addEventListener('click',function(b){handleAccordionClick(b,accordionPlansButtons,accordionPlansContents)})}),accordionLocationButtons.forEach(function(a){a.addEventListener('click',function(b){handleAccordionClick(b,accordionLocationButtons,accordionLocationContents)})});var inputNewsletter=document.querySelector('input[name="EMAIL"]'),newsletterButton=document.querySelector('.newsletter-button'),eventsButton=document.querySelector('.events-button');function calculateNewsletterMaxWidth(){var a;a=768>=window.innerWidth?getDistanceFromLeft(eventsButton)+eventsButton.clientWidth-getDistanceFromLeft(inputNewsletter):getDistanceFromLeft(newsletterButton)-getDistanceFromLeft(inputNewsletter)-10,inputNewsletter.style.maxWidth=a+'px'}window.addEventListener('resize',calculateNewsletterMaxWidth),window.addEventListener('load',calculateNewsletterMaxWidth);var waypoints=sliceArray(document.querySelectorAll('.waypoint')),sectionAbout=document.querySelector('.section-about'),stickyNav=document.querySelector('.sticky-nav-list');function isScrolledIntoView(a){var b=a.getBoundingClientRect().top,c=a.getBoundingClientRect().bottom,d=a.clientHeight;return b<=window.innerHeight&&c<=window.innerHeight+d&&b>=-d&&0<=c}function scrolledInAnimationHandler(a,b){var c=b.classList.contains('animated'),d=b.getAttribute('data');a?(b.classList.add('inView','animated-visible'),b.classList.remove('notInView',d+'-hidden'),b.classList.add('animated')):!a&&(b.classList.add('notInView',d+'-hidden'),b.classList.remove('animated','inView','animated-visible'))}function handleAllAnimations(){waypoints.forEach(function(b){var c=isScrolledIntoView(b);scrolledInAnimationHandler(c,b)})}window.addEventListener('scroll',handleAllAnimations),window.addEventListener('load',handleAllAnimations),window.addEventListener('scroll',function(){document.body.scrollTop>window.outerHeight/2?stickyNav.classList.add('sticky-nav-list-active'):stickyNav.classList.remove('sticky-nav-list-active')});var sectionLoop=document.querySelector('.section-loop');sectionLoop.addEventListener('mouseover',function(){sectionLoop.classList.add('loop-hovering')}),sectionLoop.addEventListener('mouseout',function(){sectionLoop.classList.remove('loop-hovering')});var closeButtons=sliceArray(document.querySelectorAll('.location-x-image'));closeButtons.forEach(function(a){a.addEventListener('click',function(){var b=document.querySelector('#'+a.getAttribute('data-close'));b.classList.remove('marker-clicked'),locationButtons.forEach(function(c){c.classList.remove('overlayed')})})});var GOOGLE_MAPS_STYLE=[{elementType:'geometry',stylers:[{color:'#ebe3cd'}]},{elementType:'labels.text.fill',stylers:[{color:'#523735'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f1e6'}]},{featureType:'administrative',elementType:'geometry.stroke',stylers:[{color:'#c9b2a6'}]},{featureType:'administrative.land_parcel',stylers:[{visibility:'off'}]},{featureType:'administrative.land_parcel',elementType:'geometry.stroke',stylers:[{color:'#dcd2be'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#ae9e90'}]},{featureType:'landscape.natural',elementType:'geometry',stylers:[{color:'#dfd2ae'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#dfd2ae'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#93817c'}]},{featureType:'poi.park',elementType:'geometry.fill',stylers:[{color:'#a5b076'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#447530'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#f5f1e6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fdfcf8'}]},{featureType:'road.arterial',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#f8c967'}]},{featureType:'road.highway',elementType:'geometry.stroke',stylers:[{color:'#e9bc62'}]},{featureType:'road.highway',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.highway.controlled_access',elementType:'geometry',stylers:[{color:'#e98d58'}]},{featureType:'road.highway.controlled_access',elementType:'geometry.stroke',stylers:[{color:'#db8555'}]},{featureType:'road.local',stylers:[{color:'#ffffff'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#806b63'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#efb551'}]},{featureType:'transit.line',elementType:'labels.text.fill',stylers:[{color:'#8f7d77'}]},{featureType:'transit.line',elementType:'labels.text.stroke',stylers:[{color:'#ebe3cd'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#dfd2ae'}]},{featureType:'water',elementType:'geometry.fill',stylers:[{color:'#a2cce8'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#92998d'}]}],HK_MAP_OPTIONS={map_id:'#hk-map',center:{lat:22.265763,lng:114.16798},zoom:12,markers:[{coords:{lat:22.280789,lng:114.129113},content:'HK_1',target:'#hk-content'},{coords:{lat:22.248338,lng:114.166835},content:'HK_2',target:'#hk-content'},{coords:{lat:22.287823,lng:114.209737},content:'HK_3',target:'#hk-content'},{coords:{lat:22.284733,lng:114.215546},content:'HK_4',target:'#hk-content'},{coords:{lat:22.331028,lng:114.161816},content:'HK_5',target:'#hk-content'},{coords:{lat:22.307441,lng:114.260011},content:'HK_6',target:'#hk-content'}]},AUS_MAP_OPTIONS={map_id:'#aus-map',center:{lat:-33.8688,lng:151.2093},zoom:10,markers:[{coords:{lat:-33.8688,lng:151.2093},content:'aus-1',target:'#aus-content'}]},SG_MAP_OPTIONS={map_id:'#sg-map',center:{lat:1.3521,lng:103.8198},zoom:10,markers:[{coords:{lat:1.3521,lng:103.8198},content:'sg-1',target:'#sg-content'}]},UK_MAP_OPTIONS={map_id:'#uk-map',center:{lat:51.5074,lng:-0.1278},zoom:10,markers:[{coords:{lat:51.5074,lng:-0.1278},content:'uk-1',target:'#uk-content'}]};function generateMapOptions(a,b){return{center:a,zoom:b,disableDoubleClickZoom:!0,scrollwheel:!1,mapTypeControl:!1,streetViewControl:!1,styles:GOOGLE_MAPS_STYLE}}function addMarker(a,b){var c=a.coords,d=a.content,f=a.target,g={url:'/images/section-location/location-pin.png',scaledSize:new google.maps.Size(25,41.48)},h=new google.maps.Marker({position:c,map:b,icon:g});google.maps.event.addListener(h,'click',function(){var j=document.querySelector('[data-context="'+d+'"]');!j||locationChangeHandler(j,f)})}window.addEventListener('load',function(){function a(b){var c=b.map_id,d=b.center,f=b.zoom,g=b.markers,h=generateMapOptions(d,f),i=new google.maps.Map(document.querySelector(c),h);g.forEach(function(j){addMarker(j,i)})}a(HK_MAP_OPTIONS),a(AUS_MAP_OPTIONS),a(UK_MAP_OPTIONS)});var HK_LOCATIONS={HK_1:{soon:!1,name:'Kennedy Town',tableData:{industry:'Tech',address:'4/F, Cheung Hing Industrial Building, <br> 12P Smithfield, Kennedy Town <br> Hong Kong',contact:'hello.kt@campfire.work'},images:['/images/section-location/photo2.png','/images/section-location/photo1.png','/images/section-location/photo3.png']},HK_2:{soon:!1,name:'Wong Chuk Hang',tableData:{industry:'Fashion',address:'5/F, Remex Centre, <br> 42 Wong Chuk Hang Road. <br> Hong Kong',contact:'hello.wch@campfire.work'},images:['/images/section-location/photo1.png','/images/section-location/photo3.png','/images/section-location/photo2.png']},HK_3:{soon:!0,name:'Quarry Bay',tableData:{message:'Coming soon'},images:['/images/section-location/photo3.png','/images/section-location/photo2.png','/images/section-location/photo1.png']},HK_4:{soon:!0,name:'Tai Koo',tableData:{message:'Coming soon'},images:['/images/section-location/photo1.png','/images/section-location/photo2.png','/images/section-location/photo3.png']},HK_5:{soon:!0,name:'Sham Shui Po',tableData:{message:'Coming soon'},images:['/images/section-location/photo2.png','/images/section-location/photo3.png','/images/section-location/photo1.png']},HK_6:{soon:!0,name:'Tseung Kwan O',tableData:{message:'Coming soon'},images:['/images/section-location/photo3.png','/images/section-location/photo1.png','/images/section-location/photo2.png']}},locationButtons=sliceArray(document.querySelectorAll('.location-button')),locationButtonsWrapper=document.querySelector('.location-buttons-wrapper'),locationButtonsPlaceholder=document.querySelector('.location-buttons-placeholder'),locationDetails=document.querySelector('.location-details'),locationRightWrapper=document.querySelector('.location-right-wrapper');function generateDetailsTemplate(a){return'\n    <table>\n      <tr>\n        <td class="table-head campWhite">Industry:</td>\n        <td class="table-body campWhite">'+a.industry+'</td>\n      </tr>\n      <tr>\n        <td class="table-head campWhite">Address:</td>\n        <td class="table-body campWhite">'+a.address+'</td>\n      </tr>\n      <tr>\n        <td class="table-head campWhite">Contact:</td>\n        <td class="table-body campWhite">'+a.contact+'</td>\n      </tr>\n    </table>\n  '}function generateSoonTemplate(){return'\n    <h2 class="campWhite medium-regular">Coming soon</h2>\n    <p class="campWhite">Be the first to know! <br> Subscribe to our newsletter</p>\n    <a href="" class="button small-regular button-red comingSoonLink" scrollTo="section-loop">Sign Me Up</a>\n  '}function generateLargeSoonTemplate(){return'\n    <h1 class="campWhite large-regular">COMING SOON</h1>\n    <h2 class="campWhite medium-thin text-center">Be the first to know! <br> Subscribe to our newsletter!</h2>\n    <a href="" class="button small-regular button-red comingSoonLinks comingSoonLinkTwo" scrollTo="section-loop">Sign Me Up</a>\n  '}function generateSlide(a,b){var c=document.createElement('div'),d=document.createElement('figure'),f=document.createElement('img');return d.classList.add(b),f.setAttribute('src',a),d.appendChild(f),c.appendChild(d),c}function locationChangeHandler(a,b){var h,i,c=HK_LOCATIONS[a.getAttribute('data-context')],d=document.createElement('div'),f=document.createElement('div'),g=document.querySelector(b);if(g.classList.add('marker-clicked'),locationButtons.forEach(function(l){l.classList.remove('active-location'),l.classList.add('overlayed')}),a.classList.add('active-location'),removeAllChildren(locationDetails),removeAllChildren(locationRightWrapper),c.soon){h=generateSoonTemplate(),i=generateLargeSoonTemplate(),locationDetails.classList.add('coming-soon-location'),locationRightWrapper.innerHTML=i;var j=document.querySelector('.comingSoonLink'),k=document.querySelector('.comingSoonLinkTwo');!j||j.addEventListener('click',function(l){scrollTo(l,l.target)}),!k||k.addEventListener('click',function(l){scrollTo(l,l.target)})}else h=generateDetailsTemplate(c.tableData),locationDetails.classList.remove('coming-soon-location'),d.classList.add('slider-for'),f.classList.add('slider-nav'),c.images.forEach(function(l){d.appendChild(generateSlide(l,'slider-for-image'))}),c.images.forEach(function(l){f.appendChild(generateSlide(l,'slider-nav-image'))}),locationRightWrapper.appendChild(d),locationRightWrapper.appendChild(f),$('.slider-for').slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:'.slider-nav'}),$('.slider-nav').slick({slidesToShow:3,slidesToScroll:1,asNavFor:'.slider-for',dots:!1,arrows:!1,centerMode:!0});locationDetails.innerHTML=h}locationButtons.forEach(function(a){a.addEventListener('click',function(){locationChangeHandler(a,a.getAttribute('data-target'))})});function setHeight(){locationButtonsPlaceholder.style.height=locationButtonsWrapper.clientHeight+'px'}window.addEventListener('load',setHeight),window.addEventListener('resize',setHeight);
