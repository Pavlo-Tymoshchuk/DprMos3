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
    variableWidth: true,
    arrows:false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
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
    $('.main_sub_navigation__wrapper,.all_services').removeClass('show_sub_menu');

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

    $('.main_navigation__wrapper,.container_for_hidden').removeClass('container')
}

$('.burger_menu').on('click',function(){
    $('.mobile_menu__wrapper').addClass('show_menu');
    $('.overlay_popup').addClass('show_menu');
    $('.main_sub_navigation__wrapper,.all_services').removeClass('show_sub_menu');
});

$('.close_menu, .overlay_popup').on('click',function(event){
    event.preventDefault();
    $('.mobile_menu__wrapper').removeClass('show_menu');
    $('.overlay_popup').removeClass('show_menu');
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }
  
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  
  });
  
  });