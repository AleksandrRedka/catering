$(document).ready(
    (function () {
        // Portfolio Slider
        (function () {
            $('.portfolio_slider').slick({
                dots:false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-review slick-prev slick_main_portfolio_prev"></button>',
                nextArrow: '<button class="slick-review slick-next slick_main_portfolio_next"></button>',
                responsive: [

                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: '22vw'
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: '70px'
                        }
                    }
                ],
            });
        })();
        //Gallery Slider
        (function () {
            $('.gallery_slider').slick({
                dots:false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-review slick-prev slick_main_gallery_prev"></button>',
                nextArrow: '<button class="slick-review slick-next slick_main_gallery_next"></button>',
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: '22vw'
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            centerMode: true,
                            centerPadding: '70px'
                        }
                    }
                ],
            });
        })();
        // Burger menu mobil
        (function () {
            $('.menu_burger-js').click(function () {
                $('.menu').toggleClass('menu_open');
                $('body').toggleClass('body_hidden');
                $('.menu_burger').toggleClass('menu_burger_open')
            })
        })();
        // Read More
        (function () {
            $('.read-more-js').click(function () {
                $('.about_us_wrapper_info_text').toggleClass('about_us_wrapper_info_text_open');
                if($(this).text() === 'Читать...'){$(this).text('Cкрыть')}
                else{$(this).text('Читать...')}
            })
        })();
        // backgroundColor header
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
        // pop up call
        (function () {
            $('.form-call-js').click(openForm);
            function openForm() {
                $('body').css('overflow','hidden');
                $('.wrapper_pop_up_call').addClass('wrapper_pop_up_call_open');
            }
            $('.close-form-call-js').click(closeForm);
            function closeForm() {
                $('body').css('overflow','auto');
                $('.wrapper_pop_up_call').removeClass('wrapper_pop_up_call_open');
            }
            $('.form-post-js').click(postForm);
            function postForm(e) {
                e.preventDefault();
                $('.pop_up_call_title').css('display','none');
                $('.call_form').css('display','none');
                $('.form-thanks-js').addClass('form_thanks_open');
                setTimeout(function () {
                        closeForm();
                        $('.pop_up_call_title').css('display','block');
                        $('.call_form').css('display','block');
                        $('.form-thanks-js').removeClass('form_thanks_open');
                    }
                    ,2000)
            }
        })();
        // Slick slider Main
        (function () {
            $('.main_section_slider_img').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.main_section_slider_text',
                // fade: true,
                autoplay: true,
                speed: 800,
                infinite: true,
            });
            $('.main_section_slider_text').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 800,
                asNavFor: '.main_section_slider_img',
                arrows: true,
                fade: true,
                infinite: true,
                prevArrow: '<button class="slick-review slick-prev slick-main-prev"><img src="assest/img/svg/Symbol9–1.svg" alt=""></button>',
                nextArrow: '<button class="slick-review slick-next slick-main-next"><img src="assest/img/svg/Symbol9–1.svg" alt=""></button>',
            });
        })();
        // Slider reviews
        (function () {
            if ($(window).width() <= '767') {
                $('.reviews_slider').slick({
                    fade: true,
                    prevArrow: '<button class="slick-review slick-prev slick-reviews-prev"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                    nextArrow: '<button class="slick-review slick-next slick-reviews-next"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.reviews_slider_down',
                });
                $('.reviews_slider_down').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    asNavFor: '.reviews_slider',
                    arrows: false,
                    infinite: true,
                    fade: false,
                });
            }
            if ($(window).width() > '767'){
                $('.reviews_slider').slick({
                    arrows: true,
                    prevArrow: '<button class="slick-review slick-prev slick-reviews-prev"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                    nextArrow: '<button class="slick-review slick-next slick-reviews-next"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '40rem',
                    responsive: [

                        {
                            breakpoint: 1024,
                            settings: {
                                arrows: true,
                                prevArrow: '<button class="slick-review slick-prev slick-reviews-prev"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                                nextArrow: '<button class="slick-review slick-next slick-reviews-next"><img src="assest/img/svg/Symbol15–7.svg" alt=""></button>',
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                centerPadding: '28rem',
                                centerMode: true,

                            }
                        },
                ],
                });
            }
                })();
        // pop-up-calc
        (function () {
            $('.calc-js').click(calcEvent);
            function calcEvent() {
                $('.wrapper_pop_up_calc').addClass('wrapper_pop_up_calc_open');
                // $('.main_wrapper').addClass('main_wrapper_open');
                $('body').css('overflow','hidden');
            }
            $('.close-calc-js').click(closeCalc);
            function closeCalc() {
                $('.wrapper_pop_up_calc').removeClass('wrapper_pop_up_calc_open');
                // $('.main_wrapper').css('display','block');
                $('body').css('overflow','auto');
            }
        })();
        //input range on pop-up-calc
        (function() {
            $('#quantity').on('input',range);
            function range() {
                let maxValue = $('#quantity').attr('max');
                let value = $('#quantity').val();
                let val = (value / maxValue * 100);
                $('#quantity').css('background','-webkit-linear-gradient(left,#00A651 0%,#00A651 '+val+'%,#EBEBEB  '+val+'%, #EBEBEB 100% )');
                $('.calc_quantity_check_number').html('<p>'+value+'/<span>'+maxValue+'</span></p>')
            }
        })();
        // Slider select Categories
        (function () {
        })();
        // Calc-Form
        (function () {
            $('.full-price-next-js').click(function () {
                    $('.wrapper_calc_form').css('right','0%')
                }
            );
            $('.full-price-return-js').click(function () {
                $('.wrapper_calc_form').css('right','-100%')
            })
        })()
    })()
);
