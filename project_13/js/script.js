scrollHandler();

$(window).on('scroll',scrollHandler);

function scrollHandler(){
    let headerBottom = $('.header').height();

    // About 섹션 진입
    if( $(window).scrollTop() >= headerBottom){
        $('.navbar .menu-right li button').css('color','#4a4a4a');

        // progress bar 진행효과 주기
        
            $('.skill').each( function() {
                let percent = $(this).find('.percentage').text();
                $(this).find('.inner-bar').animate({width: percent},1500);

            });
        
    }

    else{
        $('.navbar .menu-right li button').css('color','white');
    }

    // 각 섹션을 보고 현재 스크롤 위치가 그 섹션보다 아래에 있으면
    // 나타나는 animate 시키기
    // each 반복문 사용

    $('section').each( function() {
        if( $(window).scrollTop() >= $(this).position().top  ){
            $(this).find('.vertical-center').animate( {top: '0px', opacity:'1'},600);
        }
    });
}

// 버튼을 눌렀을 때 해당 위치로 스크롤 하는 기능

$('#about-btn').on('click',scroll_about);
$('#contact-btn').on('click',scroll_contact);

function scroll_about(){
    let about_top = $('.about').position().top;
    $('body,html').animate( {scrollTop:about_top} ,800 );
}

function scroll_contact(){
    let contact_top = $('.contact').position().top;
    $('body,html').animate( { scrollTop:contact_top } ,800 );
}

let contact_top = $('.contact').position().top;
let about_top = $('.about').position().top;


