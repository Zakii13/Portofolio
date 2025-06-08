(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

  

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);


document.querySelectorAll('.video-item').forEach(item => {
    const videoId = item.getAttribute('data-video-id');
    const cover = item.querySelector('.video-cover');
    const wrapper = item.querySelector('.video-wrapper');
    
    // Set thumbnail URL
    cover.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;
    
    wrapper.addEventListener('click', function() {
        if (!wrapper.classList.contains('playing')) {
            wrapper.classList.add('playing');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
            wrapper.appendChild(iframe);
        }
    });
});
