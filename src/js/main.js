
// ================================
// hero slider init ===============

$('.hero-slider').owlCarousel({
    loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})

// ================================
// phone screen slider init ===============

$('.mobile-slide').owlCarousel({
    loop:true,
    responsiveClass:true,
    navText:['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})

// ================================
// news slider init ===============

$('.news-slider').owlCarousel({
    loop:true,
    margin:40,
    responsiveClass:true,
    center: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:true,
        }
    }
})

// ====================================
// mobile nav ==========================

let navTrigger = document.querySelector('.nav__trigger');
let mobileNav = document.querySelector('.mobile__nav');

function navToggle(){
    mobileNav.classList.toggle('active');
}