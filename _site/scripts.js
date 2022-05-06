
// A $( document ).ready() block.
$( document ).ready(function() { 

    $(".hamburger-button").click(function(){
  
        $(this).toggleClass("active");
        $(".mobile-menu").slideToggle();
        
        
      });

      // animate on scroll activate
      
      AOS.init();

});


lightGallery(document.getElementById('lightgallery'), {
  speed: 500,
  download: false
});