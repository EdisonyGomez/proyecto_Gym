var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

$(document).ready(function(){

      var header = $('header'),
                  btn    = $('button.toggle-nav');

      btn.on('click', function(){
            header.toggleClass('active');
      });

<<<<<<< HEAD
      

});

 
 


 $('#edit').click(function(){
     $('#contenido').load('edicion_usuario.html');
=======
       

});


 $('#edit').click(function(){
     $('#contenido').load('edicion_usuarios.html');
>>>>>>> 6a1142bd8642db54323d31df585f283722c8b05e
   });

 $('.dashboard').click(function(){
     $('.reload').load('inicio.html');
   });
<<<<<<< HEAD
=======

 

>>>>>>> 6a1142bd8642db54323d31df585f283722c8b05e
          
                 






$('.menu-toggle').click(function() {
  $('.contenedor').toggleClass('ancho-min');
  if (window.matchMedia('(min-width: 1017px)').matches) {
    /* Changes when we reach the min-width  */
      

    } else {
    /* Reset for CSS changes – Still need a better way to do this! */
      if (!$('.contenedor').hasClass("ancho-min")) {
        // $('.main').css('margin-left', '250px');
      }  
      else {
        // $('.main').css('margin-left', '70px');
      }
    }
  
});

$('.menu-boton').click(function() {
  $('.menu-nav-seg').toggleClass('open-menu-nav-seg');
  $('.menu-boton i').toggleClass('fa-caret-right');
  $('.menu-boton i').toggleClass('fa-caret-down');
});

(function($) {
  
  /*
  * We need to turn it into a function.
  * To apply the changes both on document ready and when we resize the browser.
  */
  
  function mediaSize() { 
    /* Set the matchMedia  992 + 250*/
    if (window.matchMedia('(min-width: 1017px)').matches) {
    /* Changes when we reach the min-width  */
      $('.contenedor').removeClass('ancho-min');
      // $('.sidebar').css('position', 'static');
      // $('.main').css('margin-left', '0');

    } else {
    /* Reset for CSS changes – Still need a better way to do this! */
      $('.contenedor').addClass('ancho-min');
      // $('.sidebar').css('position', 'absolute');
      // $('.main').css('margin-left', '70px');
    }
  };
  
  /* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
  window.addEventListener('resize', mediaSize, false);  
  
})(jQuery);


