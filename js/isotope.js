$(document).ready(function(){
    // init Isotope
var $grid = $('.work-projects').isotope({
  // options
});
// filter items on button click
$('.work-btn-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
 $('.navbar-toggler').html('<i class="fa fa-arrow-down fa-2x"></i>');
 $('.navbar-toggler').css("color","#f15025");
    
})

