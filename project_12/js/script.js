/* /////////////////// for문 사용버전 ////////////////

  function scrollHandler(){
      // 스크롤에 따라 playlist의 opacity 변경
      let windowBottom = $(window).scrollTop() + $(window).height();
      
      // 모든 playlist를 하나씩 살펴보고
      // 그 playlist의 중간지점 좌표가 windowBottom 보다 작으면
      // 그 playlist를 보이게 설정

      let playlists = $('.playlist');
      for(let i=0; i<playlists.length; i++){
          
          //let playlist = playlists[i];
          //console.log(playlist);
          
        let playlist = $(playlists[i]);
        let playlistHalf = playlist.position().top + playlist.outerHeight() / 2 ;

        if(windowBottom >= playlistHalf){
            playlist.animate({'opacity' : '1'},1500);
        }
      }
  }

*/
////////////////////////////////////////////////////

//////////////////////////// each 반복문 사용버전///////////////////////
function scrollHandler(){
    // 스크롤에 따라 playlist의 opacity 변경
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    // 모든 playlist를 하나씩 살펴보고
    // 그 playlist의 중간지점 좌표가 windowBottom 보다 작으면
    // 그 playlist를 보이게 설정

    let playlists = $('.playlist');

    playlists.each( function(){
        
        //let playlist = playlists[i];
        //console.log(playlist);
    
      let playlistHalf = $(this).position().top + $(this).outerHeight() / 2 ;

      if(windowBottom >= playlistHalf){
          $(this).animate({'opacity' : '1'},1500);
      }
    });

    // 어느정도 까지내려가면 업버튼 보이게 함
    let documentHeight = document.body.scrollHeight;
    if( windowBottom >= (documentHeight - 500) ){
        $('.to-top-btn').fadeIn(1000);
    }
    else{
        $('.to-top-btn').fadeOut(1000);
    }


}
   
   $(window).on('scroll',scrollHandler);

  // 처음 로딩될 때 호출
  scrollHandler();
  
 

  $('.to-top-btn').on('click',function(){
      $(this).fadeOut(1000);
      $('body,html').animate({scrollTop:0},800);
      // 서서히 올라가는 것 구현
      // body 를 적용하지 않으면 IE 에선 적용 안된다고함.
      // 원래 jQuery animate 에는 css 속성만 올 수 있지만
      // scrollTop 은 예외적으로 된다.
    });