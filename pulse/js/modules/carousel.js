function carousel(carouselSelector, leftIconSrc, rightIconSrc) {
    $(carouselSelector).slick({
      speed: 600,
      adaptiveHeight: true,
      prevArrow: `<button type="button" class="prev"><img src=${leftIconSrc}></button>`,
      nextArrow: `<button type="button" class="next"><img src=${rightIconSrc}></button>`,
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
  }

  export default carousel;

  