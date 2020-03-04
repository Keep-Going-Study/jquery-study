let $btn1 = $('#btn1');
let $btn2 = $('#btn2');
let $btn3 = $('#btn3');

$btn1.on('click', dropblue);
$btn2.on('click', dropwhite);
$btn3.on('click', dropblueDot);

function dropblue(){
    $('.flag.blue').addClass('down');
    setTimeout(up,1000);
}

function dropwhite(){
    $('.flag.white').addClass('down');
    setTimeout(up,1000);
}

function dropblueDot(){
    $('.flag.blue.dot').addClass('down');
    setTimeout(up,1000);
}

function up(){
    $('.flag').removeClass('down');
}
