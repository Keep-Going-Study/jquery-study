
/*
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