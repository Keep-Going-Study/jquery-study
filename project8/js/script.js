let $btn_send = $('#send');

$btn_send.on('click',send);

function send(){
    if($('textarea').val() != "")
    {
        let message = $('<div></div>').addClass('my-bubble');
        message.text($('textarea').val());
        $('.chatbox').append(message);
        $('textarea').val("");
    }
}