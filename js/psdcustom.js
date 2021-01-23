$(document).ready(function () {

            // banner slider 
            $('.banner-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: false,

            });

            // team slider 
            $('.team_slider').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                autoplay: true,

                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        }
    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
    },
                    
                     {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
    },

  ]



            });

            // team two slider 

            $('.text_slide').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.img_slide'


            });


            $('.img_slide').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.text_slide',
                arrows: true,
                prevArrow: '.left_arrow',
                nextArrow: '.right_arrow',
                dots: false,
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: true,


                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        }
    },
                    {
                       
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        }
    },
                    

  ]

            });
   
    // video popup
    $('.venobox').venobox(); 
    
     // sticky top menu js
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        var sticky = $('.sticky-top');
        
        if(scrolling >= 200){
            sticky.addClass('nav-bg');
        }
        else{
            sticky.removeClass('nav-bg');
        }
    });
    
    //smooth scrolling
    
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });
    
    // wow js
   
    new WOW().init();
    
    //background video
    
    jQuery("#bgndVideo").YTPlayer();
    
    //typed js
    
    $(".typed").typed({
		strings: ["Wev Developer.", "Web Designer.", "Full Stack Web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
        //false: infinite,
        loopCount: 5000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    
  //particle js
  
    particlesJS("particles-js", {
      particles: {
          number: {
              value: 50,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: "#24e6fc"
          },
          shape: {
              type: "circle",
              stroke: {
                  width: 1,
                  color: "#000000"
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 0.5,
              random: false,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: true,
                  speed: 40,
                  size_min: 30.858934067451116,
                  sync: false
              }
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: "#24e6fc",
              opacity: 1,
              width: 1
          },
          move: {
              enable: true,
              speed: 3.206824121731046,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
      interactivity: {
          detect_on: "canvas",
          events: {
              onhover: {
                  enable: true,
                  mode: "grab"
              },
              onclick: {
                  enable: true,
                  mode: "repulse"
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 200,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: true
  });
    
    //scroll to top
    
var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow6.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

   //preloader
 /*  
$(window).on('load', function (){
    $(".preloader").delay(1200).fadeOut(1000);
});*/

});