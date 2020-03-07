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


}
   
   $(window).on('scroll',scrollHandler);

  // 처음 로딩될 때 호출
  scrollHandler();
  
 

  $('.to-top-btn').on('click',function(){
      $(window).scrollTop(0); // 서서히 올라가게 하는 것 구현하기
      $(this).fadeOut(1000);
  })