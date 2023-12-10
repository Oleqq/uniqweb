

$(document).ready(function() {
  $('#pagepiling').pagepiling({
    sectionsColor: ['#000000', '#050505', '#050505', '#050505'],
    // scrollingSpeed: 100, // Установите скорость прокрутки по вашему выбору
    

    
});

  // Отключаем PagePiling для элементов с атрибутом data-normal-scroll
  $('[data-normal-scroll]').on('touchmove', function(e) {
    e.stopPropagation();
  });
});






$(document).ready(function() {
    // Находим элементы, например, по классу и добавляем обработчик события клика на иконку FAQ
    $('.faq__icon').click(function() {
        // Выполняем переход к четвертой секции PagePiling
        $.fn.pagepiling.moveTo(4);
    });
    $('.hero__tip-text').click(function() {
      // Выполняем переход к четвертой секции PagePiling
      $.fn.pagepiling.moveTo(3);
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".section4__button");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const popupClose = document.getElementById("popupClose");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  popupClose.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});























//   document.addEventListener("DOMContentLoaded", function () {
//     const faqItems = document.querySelectorAll(".faq__item");
  
//     const lazyLoadAnimation = function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = "1";
//           entry.target.classList.add("fadeInAnimation");
//           observer.unobserve(entry.target);
//         }
//       });
//     };
  
//     const observer = new IntersectionObserver(lazyLoadAnimation, {
//       root: null, // Наблюдение за видимой областью документа
//       rootMargin: "0px", // Отступы от границ наблюдаемой области
//       threshold: 0.3 // Порог видимости элемента (виден, если на 30%)
//     });
  
//     faqItems.forEach(function (item) {
//       observer.observe(item);
//     });
//   });
  