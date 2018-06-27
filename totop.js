$(window).scroll(function() {
    if ($(this).scrollTop() >= 300) {       // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('html, body').stop().animate({
        scrollTop : 0                       // Scroll to top of body
    }, 100, 'swing', function() { 
    alert("Finished animating");
    });
});


