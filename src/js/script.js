svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  /* Инициализация плагина набора текста */
  var typed = new Typed('.side_bar__desc-typed', {
    strings: ['^2000 Frontend-разработчик.', '^2000 HTML-верстальщик.'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
  });

  /* Инициализация плагина скроллбара */

  jQuery('.scrollbar-macosx').scrollbar();

  /* Открытие/закрытие мобильного меню */

  var button = $('.side-bar__btn')

  button.click(function() {
    $('.side-bar__panel').toggleClass('side-bar__panel--active');
    button.toggleClass('side-bar__btn--active');
  });

  /* progress-bar */

  $('.second.circle').circleProgress({
    value: 0.85,
    fill: '#01d1a7',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('span').html(Math.round(85 * progress) + '<i>%</i>');
  });


  /* swiper */

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    autoplay: {
      delay: 10000,
      disableOnInteraction: true,
    },

    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
    
  });
  
});



// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
