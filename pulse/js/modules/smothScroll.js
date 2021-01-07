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

  export default scroll;
  
  