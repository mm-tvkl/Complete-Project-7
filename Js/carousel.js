const nextBtn = '<button class="d-flex btn-next-and-prev mx-2"><i class="bi bi-arrow-right d-inline-flex"></i></button>';
const prevBtn = '<button class="d-flex btn-next-and-prev mx-2"><i class="bi bi-arrow-left d-inline-flex"></i></button>';

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    stagePadding: 50,
    nav: true,
    URLhashListener: true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    smartSpeed:500,
    navText: [
        prevBtn, nextBtn
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})