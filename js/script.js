$(document)
.ready(function() {
  
  $('.ui.vertical.inverted.thin.sidebar.menu a').on('click', function(){
    $('.ui.vertical.inverted.thin.sidebar.menu').sidebar('toggle')}
  );

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

  $("#att-btn").click(function(){
    $('.modal-att').modal('show');
  });
 
  $("#ahp-btn").click(function(){
    $('.modal-ahp').modal('show');
  });
 
  $("#gengo-btn").click(function(){
    $('.modal-gengo').modal('show');
  });

  //call scrollspy
  $(window).scroll( function() {
    scrollSpy();
  });

  scrollSpy();

  
  //scrollspy
  function scrollSpy() {
    var sections = ['sec-home', 'sec-education', 'sec-skills', 'sec-experience', 'sec-contact'];
    var current;

    for (var i = 0; i < sections.length; i++) {
      if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
        current = sections[i];
      }
    }
    $("a[href='#"+current+"']").addClass('active');
    $("a").not("a[href='#"+current+"']").removeClass('active');      
  }
 
    // smooth scrolling navigation
    $(".menu a").click( function() {
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 300);
      return false;
    });


})
;