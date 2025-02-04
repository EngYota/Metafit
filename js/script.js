/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
    var a = document.getElementById("chat-input");
    if ("" != a.value) {
      var b = $("#get-number").text(),
        c = document.getElementById("chat-input").value,
        d = "https://web.whatsapp.com/send",
        e = b,
        f = "&text=" + c;
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|chrome|Opera Mini/i.test(
          navigator.userAgent
        )
      )
        var d = "whatsapp://send";
      var g = d + "?phone=" + e + f;
      window.open(g, "_blank");
    }
  }),
    $(document).on("click", ".informasi", function() {
      (document.getElementById("get-number").innerHTML = $(this)
        .children(".my-number")
        .text()),
        $(".start-chat,.get-new")
          .addClass("show")
          .removeClass("hide"),
        $(".home-chat,.head-home")
          .addClass("hide")
          .removeClass("show"),
        (document.getElementById("get-nama").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-nama")
          .text()),
        (document.getElementById("get-label").innerHTML = $(this)
          .children(".info-chat")
          .children(".chat-label")
          .text());
    }),
    $(document).on("click", ".close-chat", function() {
      $("#whatsapp-chat")
        .addClass("hide")
        .removeClass("show");
    }),
    $(document).on("click", ".blantershow-chat", function() {
      $("#whatsapp-chat")
        .addClass("show")
        .removeClass("hide");
    });

    (function($) {
      "use strict";
    
        jQuery(document).ready(function(){
          
            /* --------------------------------------------------------
                1. Variables
            --------------------------------------------------------- */
            var $window = $(window),
            $body = $('body');
    
  
    // Mobile-menu
    (function () {
      var $ltn__utilizeToggle = $('.Menu-toggle'),
          $ltn__utilize = $('.Metafit-header'),
          $ltn__utilizeOverlay = $('.Metafit-overlay'),
          $mobileMenuToggle = $('.mobile-menu-toggle'),
          $mobileCart = $('.Metafit-Cart');
      $ltn__utilizeToggle.on('click', function (e) {
          e.preventDefault();
          var $this = $(this),
              $target = $this.attr('href');
          $body.addClass('ltn__utilize-open');
          $($target).addClass('ltn__utilize-open');
          $ltn__utilizeOverlay.fadeIn();
          if ($this.parent().hasClass('mobile-menu-toggle')) {
              $this.addClass('close');
          }
      });
      $('.meta-close, .Metafit-overlay').on('click', function (e) {
        e.preventDefault();
        $body.removeClass('ltn__utilize-open');
        $ltn__utilize.removeClass('ltn__utilize-open');
        $ltn__utilizeOverlay.fadeOut();
        $mobileMenuToggle.find('a').removeClass('close');
    });
    // cart
      $('.meta-close, .Metafit-overlay').on('click', function (e) {
          e.preventDefault();
          $body.removeClass('ltn__utilize-open');
          $mobileCart.removeClass('ltn__utilize-open');
          $ltn__utilizeOverlay.fadeOut();
          $mobileMenuToggle.find('a').removeClass('close');
      });
     
  })();
});
      })(jQuery);

  
