$(document).ready(
    (function () {
        (function () {
            $('.portfolio_slider').slick({
                centerMode: true,
                centerPadding: '22vw',
                dots:false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-review slick-prev slick_main_portfolio_prev"></button>',
                nextArrow: '<button class="slick-review slick-next slick_main_portfolio_next"></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            centerPadding: '22vw'
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            centerPadding: '70px'
                        }
                    }
                ],
            })
        })();
        (function () {
            $('.menu_burger-js').click(function () {
                $('.menu').toggleClass('menu_open')
            })
        })();
        (function () {
            $('.read-more-js').click(function () {
                $('.about_us_wrapper_info_text').toggleClass('about_us_wrapper_info_text_open');
                if($(this).text() === 'Читать...'){$(this).text('Cкрыть')}
                else{$(this).text('Читать...')}
            })
        })();
        (function () {
            $(document).on('scroll', function () {
                let lengthScroll = $(document).scrollTop();
                if (lengthScroll > 150) {
                    $('header').css('background-color','rgba(255,255,255,1)');
                } else {
                    $('header').css('background-color','')

                }
            });
        })();
        // pop-up-buy
        (function () {
            $('.buy-js').click(openShop);
            function openShop() {
                $('.wrapper_pop_up_product').addClass('wrapper_pop_up_product_open');
            };
            $('.close-pop-up-js').click(closeShop);
            function closeShop() {
                $('.wrapper_pop_up_product').removeClass('wrapper_pop_up_product_open')
            };
            $('.post-shop-js').click(postOrder);
            function postOrder(e) {
                e.preventDefault();
                $('body').css('overflow','hidden');
                $('.pop_up_buy').css('display','none');
                $('.pop_up_thanks').addClass('pop_up_thanks_open');
                setTimeout(function () {
                    closeShop();
                    $('body').css('overflow','auto');
                    $('.pop_up_buy').css('display','block');
                    $('.pop_up_thanks').removeClass('pop_up_thanks_open');
                    }
                    ,2000)
            }
        })();
        // slider-pop-up-shop
        // (function () {
        //     $('.buy_product_slider').slick({
        //         infinite: true,
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         arrows:true,
        //         prevArrow: '<button class="slick-review slick-prev slick-shop-prev"></button>',
        //         nextArrow: '<button class="slick-review slick-prev slick-shop-next"></button>',
        //     })
        // })()
    })()
);
