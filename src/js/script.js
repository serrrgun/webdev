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

  $('.side-bar__btn').click(function() {
    $('.side-bar__panel').toggle(500);
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
