$(document).ready(function() {
   $('h1').click(function(event) {
    // $( 'p' ).toggle(); 
    //$('p').fadeToggle(2000);
    //想要往後的效果 就是.效果
    //$('p').slideUp(2000).slideDown(3000);
    $('P').toggleClass('orange');
   });
});