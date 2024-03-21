// left navigation
function setActive(num){
    $('.pages-nav a').removeClass('active');
    $('.pages-nav a')[num].classList.add('active');
}
window.addEventListener('scroll', function() {
    if(pageYOffset >= $('#offer').offset().top && pageYOffset < $('#about').offset().top){
        setActive(0);
    }else if(pageYOffset >= $('#about').offset().top && pageYOffset < $('#opinion').offset().top){
        setActive(1);
    }else if(pageYOffset >= $('#opinion').offset().top && pageYOffset < $('#nuance').offset().top){
        setActive(2);
    }else if(pageYOffset >= $('#nuance').offset().top && pageYOffset < $('#service').offset().top){
        setActive(3);
    }else if(pageYOffset >= $('#service').offset().top && pageYOffset < $('#trust').offset().top){
        setActive(4);
    }else if(pageYOffset >= $('#trust').offset().top && pageYOffset < $('#workers').offset().top){
        setActive(5);
    }else if(pageYOffset >= $('#workers').offset().top && pageYOffset < $('#feedback').offset().top){
        setActive(6);
    }else if(pageYOffset >= $('#feedback').offset().top && pageYOffset < $('#blog').offset().top){
        setActive(7);
    }else if(pageYOffset >= $('#blog').offset().top && pageYOffset < $('#max').offset().top){
        setActive(8);
    }else if(pageYOffset >= $('#max').offset().top && pageYOffset < $('#for-what').offset().top){
        setActive(9);
    }else if(pageYOffset >= $('#for-what').offset().top && pageYOffset < $('#specialization').offset().top){
        setActive(10);
    }else if(pageYOffset >= $('#specialization').offset().top){
        setActive(11);
    }
    
});

$(document).ready(()=>{
    // wow js
    new WOW().init();
    
    // opinion slider
    $('.opinion__slider').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    // workers slider
    $('.workers__slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        prevArrow: document.querySelector('.workers__prev-arrow'),
        nextArrow: document.querySelector('.workers__next-arrow'),
        autoplay: true
    });
    
    // blog-slider
    $('.blog__slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true
    });


    // specialization__slider
    let isActiveSpecializationSlider = false;
    let windowWidth = window.innerWidth;

    $(window).resize(function() {
        windowWidth = window.innerWidth;
        resizespecializationSlider(windowWidth);
    });

    function resizespecializationSlider(width){
        if (width < 769 && !isActiveSpecializationSlider) {
            isActiveSpecializationSlider = true;
            $('.specialization__slider').slick({
                arrows: false,
                dots: true,
                slidesToShow: 1,
                autoplay: true
            });
        } else if(width >= 769 && isActiveSpecializationSlider) {
            isActiveSpecializationSlider = false;
            $('.specialization__slider').slick("unslick");
        }
    }
    resizespecializationSlider(windowWidth);
});


// Spoiler settings
function spoilerToggle(id){
    let spoiler_content = $('#'+id + ' .spoiler__content');
    spoiler_content.animate({  
        height: 'toggle'
    }, ()=>{
        if(spoiler_content.css('display') == "block"){
            $('#'+id + ' .spoiler__title').text('Свернуть описание');
        }else{
            $('#'+id + ' .spoiler__title').text('Развернуть описание');
        }
    });
}

// service tab
function hideAllServiceTabs(){
    $('.service__tabs-body').hide();
}
hideAllServiceTabs();

$('#service-tab-all').show(); //Активируем первый таб

function showServiceTab(tab_id, this_but){
    hideAllServiceTabs();
    $('#'+tab_id).show();
    
    $('.service__tabs-menu-list li').removeClass('active');
    this_but.classList.add('active');
}

// easy scroll
$('.pages-nav__link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top+5
        }, 500
        );
    }
    return false;
});