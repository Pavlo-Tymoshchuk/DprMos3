let questionInputName = $('#question-name');
let questionInputPhone = $('#question-phone');
let questionInputEmail = $('#question-email');
let questionButton = $('.main__form_button');
let questionInputWrapper = document.querySelectorAll('.main__form_input__wrapper');

questionButton.click(function(event){
    event.preventDefault();
    if(questionInputName.val() === "") {
        questionInputWrapper[0].classList.add('question_error');
        questionInputName.val("Введите имя");
        return;
    }
    
    if(questionInputPhone.val() === "") {
        questionInputWrapper[1].classList.add('question_error');
        questionInputPhone.val("Введите номер телефона");
        return;
    }
    
    if(questionInputEmail.val() === "") {
        questionInputWrapper[2].classList.add('question_error');
        questionInputEmail.val("Введите email");
        return;
    }
});


$('.main__form_input__wrapper .main__form_input').on("click",function() {
    let parent = $(this).parents(".main__form_input__wrapper");
    parent.removeClass('question_error');
    $(this).val("");
});


$('.main_our_partners__list').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    dots: true,
    // autoplay: true,
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true
            }
        }
    ]
});

$('.main_clients_say__slider').slick({
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    arrows: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }
        }
    ]
});

$('.pass-select,.legal-select,.individ-select,.badge-select, .link_to_map').on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
});

$('.pass_select-js a').on('click', function(event){
    event.preventDefault();
    let target = $(this).attr('data-target');
    $('.select__link').removeClass('active');
    $(this).addClass('active');
    
    $('.pass__list-js li').removeClass('show');
    $('.pass__list-js li[data-type = "'+ target +'"]').addClass('show');
    
    
    if(target === 'All'){
        $('.pass__list-js li').addClass('show');
    }
});

$('.main_clients__filter_item').on('click', function(event){
    event.preventDefault();
    let target = $(this).attr('data-target');
    $('.main_clients__filter_item').removeClass('clients__link_active');
    $(this).addClass('clients__link_active');
    
    $('.review-js').removeClass('show');
    $('.review-js[data-type = '+ target +']').addClass('show');
    
    if(target === 'all'){
        $('.review-js').addClass('show');
    }
});


var windowWidth = $(window).width();

function addNavLis() {
    let firstContForHid = $('.container_for_hidden .main_navigation__item:first-child');
    let mainNav = $('.main_navigation');
    mainNav.append(firstContForHid);
}

function removeNavLis(){
    let contForHid = $('.container_for_hidden');
    let lastItem = $('.main_navigation__wrapper .main_navigation__item:last-child');
    contForHid.append(lastItem);
}

function changeNav() {
    let newWindowWidth = $(window).width();
    let container = $('.main_navigation__wrapper').width();
    let widthNav = $('.main_navigation').width();
    let viewMoreBlock = $('.main_contact__wrapper').width();
    let firstContForHid = $('.container_for_hidden .main_navigation__item:first-child');
    
    if(newWindowWidth > windowWidth) {
        if(widthNav + firstContForHid.width() + viewMoreBlock < container) {
            addNavLis();
            changeNav();
        }
    }else{
        if(widthNav + viewMoreBlock > container) {
            removeNavLis();
            changeNav();
        }
    }
    windowWidth = newWindowWidth;
}

changeNav();

$(window).on('resize', function(){

     changeNav();

    if($(window).width() < 1024) {
        $('.contact_form__wrapper .block_form').append($('.main__form_textarea'));
    }
});

$('.navigation_open').on('click', function(event){
    event.preventDefault();
    $('.container_for_hidden').toggleClass('show_hidden');
});

$('.header_top__login_form a,.header_top__callback,.mobile_list li,.registration-js').on('click',function(event){
    event.preventDefault();
    let prop = $(this).attr('data-target');
    
    $('.popup[data-type = '+ prop +']').addClass('active_popup');
    $('.overlay_popup').addClass('active_popup');
});

$('.overlay_popup,.popup_close').on('click',function(event){
    event.preventDefault();
    $('.popup').removeClass('active_popup');
    $('.overlay_popup').removeClass('active_popup');
    $('.main__form_input__wrapper').removeClass('question_error');
});

let popupEnter = $('.popup_enter .main__form_input');
let popupRegistration = $('.popup_registration .main__form_input');
let popupEnterContact = $('.popup_contact .main__form_input');
let enter = $('#enter');
let registration = $('#registration');
let enterContact = $('#enter-contact');

function checkedPopupInput(button,popupInput) {
    button.on('click',function(event){
    event.preventDefault();
        if(popupInput.val() === "") {
            popupInput.parents(".main__form_input__wrapper").addClass('question_error');
        }
    });
}

checkedPopupInput(enter,popupEnter);
checkedPopupInput(registration,popupRegistration);
checkedPopupInput(enterContact,popupEnterContact);

// Mobile

if($(window).width() < 1330) {
    $('.all_services').on('click', function(event){
        event.preventDefault();
        $('.main_sub_navigation__wrapper,.all_services').toggleClass('show_sub_menu');
    });
}

if($(window).width() < 768) {
    $('.header_top').append($('.header_top__inforamation'));
    $('.header_top__inforamation').addClass('container');
    
    $('.main_business_card__wrapper').append($('.main_contract__inform_decor'));
    
    $('.mobile_menu__wrapper').append($('.container_for_hidden'));
    
    let contactItem = ($('<li class="main_navigation__item"></li>')).append($('.main_contact .main_navigation__link'));
    $('.container_for_hidden').append(contactItem);
}

$('.burger_menu').on('click',function(){
    $('.mobile_menu__wrapper').addClass('show_menu');
    $('.overlay_popup').addClass('show_menu');
});

$('.close_menu, .overlay_popup').on('click',function(event){
    event.preventDefault();
    $('.mobile_menu__wrapper').removeClass('show_menu');
    $('.overlay_popup').removeClass('show_menu');
});

