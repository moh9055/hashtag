let navBar = document.querySelector(".navbar");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    
    if(scroll > 20){
        navBar.classList.add('header_scrolled');
    }else{
        navBar.classList.remove('header_scrolled');

    }
}

$('.owl-carousel').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplayHoverPause:true,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass: true,

    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})