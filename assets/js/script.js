$(document).ready(
    (function () {
        // Portfolio Slider
        (function () {
            if ($(window).width() <= '980') {
                $('.portfolio_slider').slick({
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '22vw',
                    arrows: true,
                    prevArrow: '<button class="slick-review slick-prev slick_main_portfolio_prev"><img src="./assets/img/svg/portfolio_prev.svg" alt=""></button>',
                    nextArrow: '<button class="slick-review slick-next slick_main_portfolio_next"><img src="./assets/img/svg/portfolio_next.svg" alt=""></button>',
                    responsive: [

                        {
                            breakpoint: 1024,
                            settings: {
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                centerMode: true,
                                centerPadding: '70px'
                            }
                        }
                    ],
                });
            };
            if($(window).width() > '980'){
                const sliderPortfolio = $('.portfolio_slider');
                sliderPortfolio.owlCarousel({
                        nav: true,
                        margin: 15,
                        items: 3,
                        dots: false,
                        loop: true,
                        autoWidth: true,
                        navText: [
                            "<div class=\"slick-portfolio slick-prev slick_main_portfolio_prev\"><img src='./assets/img/svg/portfolio_prev.svg' alt=''> </div>",
                            "<div class=\"slick-portfolio slick-next slick_main_portfolio_next\"><img src='./assets/img/svg/portfolio_next.svg' alt=''> </div>"
                        ],
                    }
                );
                function addClassPortfolio() {
                    let firstActive = $('.portfolio_slider').find('div.active:first');
                    firstActive.addClass('portfolio_img_first');
                    let secondActive = firstActive.next();
                    secondActive.addClass('portfolio_img_second');
                }
                addClassPortfolio();
                $('.slick_main_portfolio_next').click(function () {
                    $('.portfolio_slider').find('.owl-stage').addClass('portfolio_slider_next');
                    $('.portfolio_img_first').removeClass('portfolio_img_first');
                    $('.portfolio_img_second').removeClass('portfolio_img_second');
                    addClassPortfolio();
                });
                $('.slick_main_portfolio_prev').click(function () {
                    $('.portfolio_slider').find('.owl-stage').addClass('portfolio_slider_prev');
                    $('.portfolio_img_first').removeClass('portfolio_img_first');
                    $('.portfolio_img_second').removeClass('portfolio_img_second');
                    addClassPortfolio();
                });

            }
        })();
        //Gallery Slider
        (function () {
            if($(window).width() <= '1023') {
                $('.gallery_slider').slick({
                    dots: false,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="slick-review slick-prev slick_main_portfolio_prev"><img src="./assets/img/svg/portfolio_prev.svg" alt=""></button>',
                    nextArrow: '<button class="slick-review slick-next slick_main_portfolio_next"><img src="./assets/img/svg/portfolio_next.svg" alt=""></button>',
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
            };
            if($(window).width() > '768'){
                const sliderGallery = $('.gallery_slider');
                sliderGallery.owlCarousel({
                        nav: true,
                        loop: true,
                        margin: 30,
                        items: 4,
                        dots: false,
                        autoWidth: true,
                        onChanged: addClassGallery,
                        navText: [
                            "<div class=\"nav-gallery slick-prev nav_gallery_prev\"><img src='./assets/img/svg/portfolio_prev.svg' alt=''> </div>",
                            "<div class=\"nav-gallery slick-next nav_gallery_next\"><img src='./assets/img/svg/portfolio_next.svg' alt=''> </div>"
                        ],
                    }
                );
                function addClassGallery() {
                    $('.gallery_img_first').removeClass('gallery_img_first');
                    $('.gallery_img_last').removeClass('gallery_img_last');
                    $('.gallery_slider').find('.active').each(function (i) {
                        if(i===0){
                            $(this).addClass('gallery_img_first')
                        }
                        if (i === 3){
                            $(this).addClass('gallery_img_last');
                        }
                    });
                }
                addClassGallery();

                // $('.nav_gallery_prev').click(function () {
                //     $('.gallery_img_first').removeClass('gallery_img_first');
                //     $('.gallery_img_last').removeClass('gallery_img_last');
                //     addClassGallery();
                //
                // });
                // $('.nav_gallery_next').click(function () {
                //     // sliderGallery.trigger('next.owl.carousel');
                //     console.log($('.gallery_slider').find('.active'));
                //     $('.gallery_img_first').removeClass('gallery_img_first');
                //     $('.gallery_img_last').removeClass('gallery_img_last');
                //     addClassGallery();
                // })
            }
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
                if ($(this).text() === 'Читать...') {
                    $(this).text('Cкрыть')
                } else {
                    $(this).text('Читать...')
                }
            })
        })();
        // backgroundColor header
        (function () {
            $(document).on('scroll', function () {
                let lengthScroll = $(document).scrollTop();
                if (lengthScroll > 150) {
                    $('header').css('background-color', 'rgba(255,255,255,1)');
                } else {
                    $('header').css('background-color', '')

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
                $('body').css('overflow', 'hidden');
                $('.pop_up_buy').css('display', 'none');
                $('.pop_up_thanks').addClass('pop_up_thanks_open');
                setTimeout(function () {
                        closeShop();
                        $('body').css('overflow', 'auto');
                        $('.pop_up_buy').css('display', 'block');
                        $('.pop_up_thanks').removeClass('pop_up_thanks_open');
                    }
                    , 2000)
            }
        })();
        // pop up call
        (function () {
            $('.form-call-js').click(openForm);

            function openForm() {
                $('body').css('overflow', 'hidden');
                $('.wrapper_pop_up_call').addClass('wrapper_pop_up_call_open');
            }

            $('.close-form-call-js').click(closeForm);

            function closeForm() {
                $('body').css('overflow', 'auto');
                $('.wrapper_pop_up_call').removeClass('wrapper_pop_up_call_open');
            }

            $('.form-post-js').click(postForm);

            function postForm(e) {
                e.preventDefault();
                $('.pop_up_call_title').css('display', 'none');
                $('.call_form').css('display', 'none');
                $('.form-thanks-js').addClass('form_thanks_open');
                setTimeout(function () {
                        closeForm();
                        $('.pop_up_call_title').css('display', 'block');
                        $('.call_form').css('display', 'block');
                        $('.form-thanks-js').removeClass('form_thanks_open');
                    }
                    , 2000)
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
                // autoplay: true,
                speed: 800,
                asNavFor: '.main_section_slider_img',
                arrows: true,
                fade: true,
                infinite: true,
                prevArrow: '<button class="slick-review slick-prev slick-main-prev"><img src="assets/img/svg/Symbol9–1.svg" alt=""></button>',
                nextArrow: '<button class="slick-review slick-next slick-main-next"><img src="assets/img/svg/Symbol9–1.svg" alt=""></button>',
            });
        })();
        // Slider reviews
        (function () {
            if ($(window).width() <= '767') {
                $('.reviews_slider').slick({
                    fade: true,
                    prevArrow: '<button class="slick-review slick-prev slick-reviews-prev"><img src="assets/img/svg/Symbol15–7.svg" alt=""></button>',
                    nextArrow: '<button class="slick-review slick-next slick-reviews-next"><img src="assets/img/svg/Symbol15–7.svg" alt=""></button>',
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
            if ($(window).width() > '767') {
                const sliderReviews = $('.reviews_slider');
                sliderReviews.owlCarousel({
                        nav: true,
                        margin: 10,
                        items: 4,
                        loop: true,
                        autoWidth: true,
                        navText: [
                            "<button class=\"review_change slick-prev slick-reviews-prev\"><img src=\"assets/img/svg/Symbol15–7.svg\" alt=\"\"></button>",
                            "<button class=\"review_change slick-next slick-reviews-next\"><img src=\"assets/img/svg/Symbol15–7.svg\" alt=\"\"></button>"
                        ],
                    }
                );
            }
        })();
        //Select Active class in Reviews Slider
        (function () {
            function addClassActive() {
                let slidesActive = $('.reviews_slider').find('div.active:first');
                slidesActive.addClass('review_active');
            }

            addClassActive();
            // owl = $('.owlcarousel');
            // owl.owlCarousel({onInitialized: carouselInitialized});
            // function carouselInitialized(event) {
            $('.slick-reviews-next').click(function () {
                $('.reviews_slider').find('.owl-stage').addClass('reviews_slider_next');
                $('.reviews_slider_prev').removeClass('reviews_slider_prev');
                $('.review_active').removeClass('review_active');
                addClassActive();
            });
            $('.slick-reviews-prev').click(function () {
                $('.reviews_slider').find('.owl-stage').addClass('reviews_slider_prev');
                $('.reviews_slider_next').removeClass('reviews_slider_next');
                $('.review_active').removeClass('review_active');
                addClassActive();
            });
            // };
        })();
        // pop-up-calc
        (function () {
            $('.calc-js').click(calcEvent);

            function calcEvent() {
                $('.wrapper_pop_up_calc').addClass('wrapper_pop_up_calc_open');
                // $('.main_wrapper').addClass('main_wrapper_open');
                $('body').css('overflow', 'hidden');
            }

            $('.close-calc-js').click(closeCalc);

            function closeCalc() {
                $('.wrapper_pop_up_calc').removeClass('wrapper_pop_up_calc_open');
                // $('.main_wrapper').css('display','block');
                $('body').css('overflow', 'auto');
            }
        })();
        //input range on pop-up-calc
        (function () {
            $('#quantity-persons').on('input', range);

            function range() {
                let maxValue = $('#quantity-persons').attr('max');
                let value = $('#quantity-persons').val();
                let val = (value / maxValue * 100);
                $('#quantity-persons').css('background', '-webkit-linear-gradient(left,#00A651 0%,#00A651 ' + val + '%,#EBEBEB  ' + val + '%, #EBEBEB 100% )');
                $('.calc_quantity_check_number').html('<p>' + value + '/<span>' + maxValue + '</span></p>')
            }
        })();
        // Slider select Categories
        (function () {
            let indexTarget = 0;
            let newContent='';
            let portfolioSlider = $('.portfolio_slider');
            let parentCategories = $('.portfolio_category');
            let categoriesImages = $('.portfolio_category_item');
            let dataImages = $('.portfolio_data').children('.portfolio_data_box');
            parentCategories.on('click', 'div', function (e) {
                portfolioSlider.empty();
                portfolioSlider.trigger('destroy.owl.carousel');
                portfolioSlider.slick('unslick');
                indexTarget = $(this).index() - 1;
                if(indexTarget => 0){
                    let arrDataSrc =$(dataImages[indexTarget]).find('span');
                    for(let i=0; i<arrDataSrc.length; i++){
                          newContent+= '<div class="portfolio_slider_item">' +
                              `<div class="portfolio_slider_wrapper_img"><img src="${arrDataSrc[i].dataset.src}" alt=""></div>` +
                              '</div>'
                    }
                };
                portfolioSlider.html(newContent);
                newContent = '';
                if($(window).width() > '980'){
                    portfolioSlider.owlCarousel({
                            nav: true,
                            margin: 15,
                            items: 3,
                            dots: false,
                            loop: true,
                            autoWidth: true,
                            navText: [
                                "<div class=\"slick-portfolio slick-prev slick_main_portfolio_prev\"><img src='./assets/img/svg/portfolio_prev.svg' alt=''> </div>",
                                "<div class=\"slick-portfolio slick-next slick_main_portfolio_next\"><img src='./assets/img/svg/portfolio_next.svg' alt=''> </div>"
                            ],
                        }
                    );
                    function addClassPortfolio() {
                        let firstActive = $('.portfolio_slider').find('div.active:first');
                        firstActive.addClass('portfolio_img_first');
                        let secondActive = firstActive.next();
                        secondActive.addClass('portfolio_img_second');
                    }
                    addClassPortfolio();
                    $('.slick_main_portfolio_next').click(function () {
                        $('.portfolio_slider').find('.owl-stage').addClass('portfolio_slider_next');
                        $('.portfolio_img_first').removeClass('portfolio_img_first');
                        $('.portfolio_img_second').removeClass('portfolio_img_second');
                        addClassPortfolio();
                    });
                    $('.slick_main_portfolio_prev').click(function () {
                        $('.portfolio_slider').find('.owl-stage').addClass('portfolio_slider_prev');
                        $('.portfolio_img_first').removeClass('portfolio_img_first');
                        $('.portfolio_img_second').removeClass('portfolio_img_second');
                        addClassPortfolio();
                    });
                };
                if ($(window).width() <= '980') {
                    $('.portfolio_slider').slick({
                        dots: false,
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '22vw',
                        arrows: true,
                        prevArrow: '<button class="slick-review slick-prev slick_main_portfolio_prev"><img src="./assets/img/svg/portfolio_prev.svg" alt=""></button>',
                        nextArrow: '<button class="slick-review slick-next slick_main_portfolio_next"><img src="./assets/img/svg/portfolio_next.svg" alt=""></button>',
                        responsive: [

                            {
                                breakpoint: 1024,
                                settings: {
                                }
                            },
                            {
                                breakpoint: 767,
                                settings: {
                                    slidesToShow: 1,
                                    centerMode: true,
                                    centerPadding: '70px'
                                }
                            }
                        ],
                    });
                };
            })

        })();
        // Calc-Form
        (function () {
            $('.full-price-next-js').click(function () {
                    $('.wrapper_calc_form').css('right', '0%')
                }
            );
            $('.full-price-return-js').click(function () {
                $('.wrapper_calc_form').css('right', '-100%')
            })
        })();
        // Calc Sum Product
        (function () {
            $('#quantity').change( function () {
                let quantityProduct = $('#quantity').val();
                let priceProduct = $('.buy_product_info_price').text();
                let priceProductNumber=parseInt(priceProduct);
                let sumPriseProduct = Number(quantityProduct) * Number(priceProductNumber);
                $('.price-product-js').html('x' +quantityProduct+'');
                $('.sum-product-js').html('-' +sumPriseProduct+ '<p>грн</p>')
            });
        })();
        // slider buy mobil
        (function () {
            $('.product_slider_btn_prev').click(function () {
                $('.buy_product_slider_track').css('left','0%');
                $('.product_slider_btn_next').css('display','block');
                $('.product_slider_btn_prev').css('display','none');
                }
            );
            $('.product_slider_btn_next').click(function () {
                $('.buy_product_slider_track').css('left','-100%');
                $('.product_slider_btn_prev').css('display','block');
                $(this).css('display','none');
            });
        })()

    }));
