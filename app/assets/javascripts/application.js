// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


/***************************************************
      As the page loads, cal these scripts
***************************************************/

// jQuery(document).ready(function ($) {
//   "use strict";

//   // responsive videos with fitvids
//   $('.fitvids').fitVids();
//   $(".hero-image").backstretch("/assets/hero_app.jpg");
//   $('.trigger-tooltio').tooltip()


// }); /* end of as page load scripts */

jQuery(document).ready(function ($) {
  "use strict";

  // responsive videos with fitvids
  $('.fitvids').fitVids();
  $(".hero-image2").backstretch("/assets/how_to_work.png");
  $('.trigger-tooltio').tooltip()


}); 

  
/***************************************************
      Autocomplete Search
***************************************************/

// Load countries then initialize plugin:
jQuery.ajax({
    url: 'content/countries.txt',
    dataType: 'json'
}).done(function (source) {

    var countriesArray = jQuery.map(source, function (value, key) { return { value: value, data: key }; }),
        countries = jQuery.map(source, function (value) { return value; });

    // Initialize autocomplete with custom appendTo:
    jQuery('#autocomplete-dynamic').autocomplete({
        lookup: countriesArray
    });
    
});

/***************************************************
      FAQ Pages
***************************************************/

jQuery(document).ready(function(){
    
    jQuery('.faq-accordion .faq-content').hide();
    
    jQuery('.faq-accordion .faq .entry-title').click(function(){
        if(jQuery(this).hasClass('faq-close')){
            
            jQuery('.faq-open').removeClass('faq-open').addClass('faq-close');
            jQuery('.faq-content').slideUp();
            
            jQuery(this).parents('.faq').first().find('.faq-content').slideDown();
            jQuery(this).removeClass('faq-close').addClass('faq-open');
            
        }else{
            jQuery(this).parents('.faq').first().find('.faq-content').slideUp();
            jQuery(this).removeClass('faq-open').addClass('faq-close');
        }
    }).addClass('faq-close');
    
});


jQuery(document).ready(function ($) {

  $(function () {
    $('.faq-back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

});


jQuery().ready(function(){

    jQuery('.faq-category-list .faq-section-heading a, .faq-category-list .entry-title a').each( function () {
    
            var destination = '';

            jQuery( this ).click(function() {

                    var elementClicked = jQuery( this ).attr( 'href' );
                    var elementOffset = jQuery( 'body' ).find( elementClicked ).offset();
                    destination = elementOffset.top;

                    jQuery( 'html,body' ).animate({ scrollTop: destination - 30 }, 500 );

                    return false;
            });

    });

});

