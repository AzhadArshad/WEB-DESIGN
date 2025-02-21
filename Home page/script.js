new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 40, 
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation : {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });

  document.querySelectorAll('.card-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent interference from other event listeners
    });
});


