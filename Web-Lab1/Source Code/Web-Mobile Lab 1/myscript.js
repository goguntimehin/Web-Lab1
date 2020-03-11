$(function(){
    // this is where i created a function to dropdown the subcategories. Calling the class myNavbar and after hover the This
    // code will dropdown the subcategories
    $('.myNavbar ul li').hover(function() {
      $(this).children('ul').stop(true, false, true).slideToggle(300);
      $(this).addClass('open');

    },

    function() {
        $(this).removeClass('open');

      });

    });
