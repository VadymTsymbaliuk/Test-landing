$(document).ready(function () {
    $('.catalog').slick({
        slideToShow: 6,
        slidesToScroll: 1,
        dots: true,
        rows: 2,
        slidesPerRow: 3,
        arrows: true,
        nextArrow: '<button type="button" class="slick-prev"></button>',
        prevArrow: '<button type="button" class="slick-next "></button>',
        responsive:[
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                }
            }
        ]

    })
    $('.side-bar-list').on('click', function (){
        console.log($(this).children().toggle())
    })
})