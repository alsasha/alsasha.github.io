/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animationObserver.js":
/*!*****************************************!*\
  !*** ./js/modules/animationObserver.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function observer(animationClass, itemsSelector) {
    const animationObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const block = entry.target;
            block.classList.add(animationClass);
          }
      });
    });
  
    const reviews = document.querySelectorAll(itemsSelector);
    reviews.forEach((v) => {
      animationObserver.observe(v);
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (observer);

  

/***/ }),

/***/ "./js/modules/carousel.js":
/*!********************************!*\
  !*** ./js/modules/carousel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);

  

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

function modal() {
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(500);
  });

  function hideModals() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  }

  $('.modal__close').on('click', function() {
    hideModals();
  });

  $('.overlay').on('click', function(e) {
        if ($(e.target).hasClass('overlay')) {
        hideModals();
        }
    });

  $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn(500);
      });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/postData.js":
/*!********************************!*\
  !*** ./js/modules/postData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });

function postData() {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
    
    
          $('form').trigger('reset');
        });
        return false;
      });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);



/***/ }),

/***/ "./js/modules/smothScroll.js":
/*!***********************************!*\
  !*** ./js/modules/smothScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function scroll(btnSelector, btnHref) {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $(btnSelector).fadeIn();
      } else {
        $(btnSelector).fadeOut();
      }
    });
  
    $(`a[href='${btnHref}']`).click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);
  
  

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function tabs() {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);



/***/ }),

/***/ "./js/modules/toggleSlide.js":
/*!***********************************!*\
  !*** ./js/modules/toggleSlide.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleSlide);


/***/ }),

/***/ "./js/modules/validateForms.js":
/*!*************************************!*\
  !*** ./js/modules/validateForms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function validationForms(selector) {
    $(selector).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);


/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animationObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animationObserver */ "./js/modules/animationObserver.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/carousel */ "./js/modules/carousel.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_postData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/postData */ "./js/modules/postData.js");
/* harmony import */ var _modules_smothScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/smothScroll */ "./js/modules/smothScroll.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_toggleSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/toggleSlide */ "./js/modules/toggleSlide.js");
/* harmony import */ var _modules_validateForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/validateForms */ "./js/modules/validateForms.js");










window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_animationObserver__WEBPACK_IMPORTED_MODULE_0__.default)('fadeInUp', '.review');
  (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_1__.default)('.carousel__inner', "icons/arrows/left.png", "icons/arrows/right.png");
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_modules_postData__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_modules_smothScroll__WEBPACK_IMPORTED_MODULE_4__.default)('.pageup', '#up');
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,_modules_toggleSlide__WEBPACK_IMPORTED_MODULE_6__.default)('.catalog-item__link');
  (0,_modules_toggleSlide__WEBPACK_IMPORTED_MODULE_6__.default)('.catalog-item__back');
  (0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_7__.default)('#consultation form');
  (0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_7__.default)('#order form');
  (0,_modules_validateForms__WEBPACK_IMPORTED_MODULE_7__.default)('#consultation-form');


  $("input[name='phone']").mask("+7 (999) 999-99-99");
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map