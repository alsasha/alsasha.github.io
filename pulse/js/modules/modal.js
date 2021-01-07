
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

export default modal;