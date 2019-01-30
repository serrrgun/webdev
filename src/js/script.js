svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){

  /* Инициализация плагина набора текста */
  var typed = new Typed('.side_bar__desc-typed', {
    strings: ['Я ^2000 фронтенд-разработчик.', 'Я ^2000 HTML-верстальщик.'],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
  });

  /* Инициализация плагина скроллбара */

  jQuery('.scrollbar-macosx').scrollbar();

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
