
/* 각각의 버튼에 이벤트 따로 준 경우

$('#even-btn').on('click',even);
$('#odd-btn').on('click',odd);

function even(){
    $('.card').each(function(){
        if( $(this).text() % 2 == 0 ) //짝수
        {
            $(this).addClass("selected");
        }
        
        else{
            $(this).removeClass('selected');
        }

       
    });
}

function odd(){
    $('.card').each(function(){
        if( $(this).text() % 2 == 1 ) //짝수
        {
            $(this).addClass("selected");
        }

        else{
            $(this).removeClass('selected');
        }

       
    });
}
*/


$('button').on('click',even_or_odd);

function even_or_odd(e){
    if(e.target.id == 'even-btn' ){
        $('.card').each(function(){
            if( $(this).text() % 2 == 0 ) //짝수
            {
                $(this).addClass("selected");
            }
            
            else{
                $(this).removeClass('selected');
            }
    
           
        });
    }

    else{ // e.target.id == 'odd-btn'
        $('.card').each(function(){
            if( $(this).text() % 2 == 1 ) //짝수
            {
                $(this).addClass("selected");
            }
    
            else{
                $(this).removeClass('selected');
            }
    
           
        });
    }
}

/* 이벤트에 우회함수 넣어서 파라미터 효과내기

$('#even-btn').on('click', evenNum);
$('#odd-btn').on('click', oddNum);

function commonHandler(isEven) {
  $('.card').each(function (card) {
    var evenValid = isEven && $(this).text() % 2 === 0
    var oddValid = !isEven && $(this).text() % 2 !== 0

    if (evenValid || oddValid) {
      $(this).addClass('selected');
    } else {
      $(this).removeClass('selected');
    }
  })
}

function evenNum() {
  commonHandler(true)
}

function oddNum() {
  commonHandler(false)
}

*/