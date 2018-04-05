
  // Side Menu
  function openSlideMenu() {
    document.querySelector('#side-menu').style.width = '200px';
    document.querySelector('#main').style.marginLeft = '200px';
    document.querySelector('#open-menu').style.visibility = 'hidden';
  }
  function closeSlideMenu() {
    document.querySelector('#side-menu').style.width = '0px';
    document.querySelector('#main').style.marginLeft = '0px';
    document.querySelector('#open-menu').style.visibility = 'visible';
  }

// JQuery part
$(document).ready(function() {

  // Scroll Reveal
    window.sr = ScrollReveal();

    sr.reveal('.side-line-left', {
      origin: 'left',
      distance: '500px',
      duration: 1000
    });
    sr.reveal('.side-line-right', {
      origin: 'right',
      distance: '500px',
      duration: 1000
    });
    sr.reveal('.section-title', {
      origin: 'top',
      distance: '100px',
      duration: 1000
    });
    sr.reveal('.hexagon-avatar', {
      origin: 'left',
      duration: 1000,
      viewFactor: 0.8
    });
    sr.reveal('.self-description', {
      origin: 'right',
      duration: 1000,
      viewFactor: 0.8
    });
    sr.reveal('.about-card-left', {
      origin: 'left',
      distance: '100px',
      duration: 1000,
      viewFactor: 0.8
    });
    sr.reveal('.about-card-right', {
      origin: 'right',
      distance: '100px',
      duration: 1000,
      viewFactor: 0.8
    });
    sr.reveal('.skill-card', {
      origin: 'bottom',
      duration: 1000
    });
    sr.reveal('.blog-well', {
      origin: 'bottom',
      duration: 1000,
      viewFactor: 0.5
    });
    sr.reveal('.one', {
      origin: 'right',
      distance: '500px',
      duration: 500,
      viewFactor: 0.5
    });
    sr.reveal('.two', {
      origin: 'right',
      distance: '500px',
      duration: 500,
      delay: 250,
      viewFactor: 0.5
    });
    sr.reveal('.three', {
      origin: 'right',
      distance: '500px',
      duration: 500,
      delay: 500,
      viewFactor: 0.5
    });
    sr.reveal('.contact-msg', {
      origin: 'top',
      duration: 1000,
      delay: 500
    });
    sr.reveal('.form-left', {
      origin: 'left',
      distance: '1000px',
      duration: 1000,
      viewFactor: 0.8
    });
    sr.reveal('.form-right', {
      origin: 'right',
      distance: '1000px',
      duration: 1000
    });
    sr.reveal('.signature', {
      origin: 'left',
      duration: 1000,
      delay: 500
    });


  $(window).on ('load', () => {
    setTimeout(function() {
      console.log('HTML LOADEDDDDDDDDDDDDDDDDDDD!');
      sr.reveal('#my-fixed-nav', {
        origin: 'top',
        distance: '100px',
        duration: 2500
      });
      $('body').css("display", "block");
      // Type Writer
      // set up text to print, each item in array is new line
      let bigTitle = "Nam Phan";
      let quickIntro = "Aenean accumsan, lorem ac mollis lacinia, metus nisi blandit augue, vel dapibus orci tortor nec dolor. Etiam interdum nulla id venenatis blandit eu fugiat nulla pariatur.";
      let iSpeed = 20; // time delay of print out

      let iTextPos = 0; // initialise text position

      let typewriter = function(text, selector, delay) {
       let sContents =  ' ';
       let destination = document.getElementById(selector);

       destination.innerHTML = sContents + text.substring(0, iTextPos) + "_";
       let iArrLength = text.length; // the length of the text
        if ( iTextPos++ == iArrLength ) {
          destination.innerHTML = sContents + text.substring(0, iTextPos);
          iTextPos = 0;
          sContents =  ' ';
        } else {
          setTimeout(() => {
            typewriter(text, selector, delay);
          } , delay);
        }
      };


      setTimeout(() => {
        typewriter(bigTitle, "typedtext-1", 100);
        setTimeout(() => {
          typewriter(quickIntro, "typedtext-2", 15);
        }, 1000);
      }, 2000);
		}, 100);
  });

  // Smooth scroll to anchor
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  var position = $(window).scrollTop();
  // should start at 0

  // Scrolling Event on Navbar
  let screenHeight = $(window).height();
  let titleThreshold = screenHeight/8;
  let introThreshold = screenHeight/4;

  $(window).scroll(function() {
      let scroll = $(window).scrollTop();

      if(scroll > position) {
          // console.log('scrollDown');

          // Greeting Scrolling
          if (scroll > titleThreshold) {
            $('.big-title').css("opacity", "0");
          }
          if (scroll > introThreshold) {
            $('.quick-intro').css("opacity", "0");
          }

          // Navbar Scrolling Handler
          $('.header-container').css({"height": "0px", "padding-top": "0px", "padding-bottom": "0px"});

          if (scroll > screenHeight-50) {
            $('.header-container').css({"background": "var(--myCoverGradient)", "opacity": "0.8"});
            $('.header-container .brand-container').css({"width": "38px", "height": "38px"});
            $('.navbar-default').css({"padding-top": "5px", "padding-bottom": "5px"});
          }

          if (scroll > screenHeight-89) {
            $('.toggle-wrapper').css({"background": "var(--myCoverGradient)", "opacity": "0.8"});
          }

          if (scroll > screenHeight+89) {
            $('.toggle-wrapper').css("height", "0px");
          }
      } else {
          // console.log('scrollUp');

          // Greeting Scrolling
          if (scroll <= titleThreshold) {
            $('.big-title').css("opacity", "1");
          }
          if (scroll <= introThreshold) {
            $('.quick-intro').css("opacity", "1");
          }

          // Navbar Scrolling Handler
          $('.toggle-wrapper').css("height", "89px");

          if (scroll < screenHeight-89) {
            $('.toggle-wrapper').css({"background": "transparent", "opacity": "1"});
          }

          if (scroll < screenHeight+89) {
            $('.toggle-wrapper').css("height", "89px");
          }

          if (scroll < screenHeight-50) {
            $('.header-container').css("height", "100px");
            $('.header-container').css({"background": "transparent", "padding-top": "20px", "opacity": "1"});
            $('.header-container .brand-container').css({"width": "75px", "height": "75px"});
            $('.navbar-default').css({"padding-top": "25px", "padding-bottom": "0px"});
          } else {
            $('.header-container').css({"height": "60px", "padding-top": "5px", "padding-bottom": "5px"});
          }
      }
      position = scroll;
  });

    // $.when(typewriter(bigTitle, "typedtext-1", 500)).then(typewriter(quickIntro, "typedtext-2", 15));
});
