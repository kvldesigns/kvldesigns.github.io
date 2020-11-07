$(window).on('load', function(){

    $('#loader-overlay').addClass('done');
    
// MENU
//-----------------------------------------------------------------------------------------
$('#menu-toggle').click(function(){
    
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }  else {
        $(this).addClass('active');
    }     
    
    if ($('ul.primary-menu').hasClass('show')) {
        $('ul.primary-menu').removeClass('show');
    } else {
        $('ul.primary-menu').addClass('show');
    }
    
});
$('#menu-toggle-2').click(function(){
    
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }  else {
        $(this).addClass('active');
    }     
    
    if ($('ul.primary-menu').hasClass('show')) {
        $('ul.primary-menu').removeClass('show');
    } else {
        $('ul.primary-menu').addClass('show');
    }
    
});
//-----------------------------------------------------------------------------------------
// MENU



// CAROUSEL SCRIPTS
//-----------------------------------------------------------------------------------------


$('#banner .owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#designs .owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#websites .owl-carousel').owlCarousel({
    loop:true,
    margin:60,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#arts .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//-----------------------------------------------------------------------------------------
// CAROUSEL SCRIPTS



// BANNER SCRIPTS
//-----------------------------------------------------------------------------------------

$('.owl-nav > button').click(function(){
    if( $('.suffix.kvlarts').parent('.owl-item').hasClass('active') ){
        $('#banner .banner-bg.kvl-arts').addClass('active');
    } else {
        $('#banner .banner-bg.kvl-arts').removeClass('active');
    }
    if( $('.suffix.kvlwebsites').parent('.owl-item').hasClass('active') ){
        $('#banner .banner-bg.kvl-websites').addClass('active');
    } else {
        $('#banner .banner-bg.kvl-websites').removeClass('active');
    }
});
$('.owl-dots > button').click(function(){
    if( $('.suffix.kvlwebsites').parent('.owl-item').hasClass('active') ){
        $('#banner .banner-bg.kvl-arts').addClass('active');
    } else {
        $('#banner .banner-bg.kvl-arts').removeClass('active');
    }
    if( $('.suffix.kvlarts').parent('.owl-item').hasClass('active') ){
        $('#banner .banner-bg.kvl-websites').addClass('active');
    } else {
        $('#banner .banner-bg.kvl-websites').removeClass('active');
    }
});
    
//-----------------------------------------------------------------------------------------
// BANNER SCRIPTS



// CUSTOM SCRIPTS
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
// CUSTOM SCRIPTS


}); // Window on load closing