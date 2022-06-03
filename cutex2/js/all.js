var is_SE = false;
var match = window.matchMedia('screen and (max-width: 376px)');

$(window).resize(function() {
  // 螢幕大小改變時 確認是否<376  
  if (match.matches) {
    if (window.outerWidth<=376) {
        if (!is_SE) {
            is_SE = true;
            $( ".comment_type.commet_info1" ).css( "display", "" );
            $( ".comment_type.commet_info2" ).css( "display", "none" );
            $( ".comment_type.commet_info3" ).css( "display", "none" ); 
        }
        $( ".turn_A" ).css( "display", "none" );        
        $( ".turn_B" ).css( "display", "" );  

    }
    else {
        is_SE = false; 
        $( ".comment_type.commet_info1" ).css( "display", "" );
        $( ".comment_type.commet_info2" ).css( "display", "none" );
        $( ".comment_type.commet_info3" ).css( "display", "none" ); 
        $( ".turn_A" ).css( "display", "none" ); 
        $( ".turn_B" ).css( "display", "" ); 
    }
  }
  else {
    is_SE = false;
    $( ".comment_type.commet_info1" ).css( "display", "" );
    $( ".comment_type.commet_info2" ).css( "display", "" );
    $( ".comment_type.commet_info3" ).css( "display", "" );
    $( ".turn_A" ).css( "display", "" ); 
    $( ".turn_B" ).css( "display", "none" ); 
  }
});

$(window).on('load', function () {
    // 載入時 確認是否<376
    if (match.matches && (!is_SE)) {
        $( ".comment_type.commet_info1" ).css( "display", "" );
        $( ".comment_type.commet_info2" ).css( "display", "none" );
        $( ".comment_type.commet_info3" ).css( "display", "none" ); 
        $( ".turn_A" ).css( "display", "none" );        
        $( ".turn_B" ).css( "display", "" );  
    }
    else {
        $( ".turn_A" ).css( "display", "" ); 
        $( ".turn_B" ).css( "display", "none" ); 
    }
})

function setbtn(para,para2) {
    let xPara = document.getElementsByClassName(para);
    xPara[0].classList.remove('choose');
    xPara[0].classList.remove('nochoose');
    if (para2==='+') {
        xPara[0].classList.add('choose');
    }
    else {
        xPara[0].classList.add('nochoose');
    };
}

function select_info() {
    let turn_A = document.getElementsByClassName('turn_A')[0];
    let turn_B = document.getElementsByClassName('turn_B')[0];
    if (turn_A.style.display!=='none') {

    }
    else {
      this.setbtn('btn_b1','+');
      this.setbtn('btn_b2','-');
      this.setbtn('btn_b3','-');
      $( ".comment_type.commet_info1" ).css( "display", "" );
      $( ".comment_type.commet_info2" ).css( "display", "none" );
      $( ".comment_type.commet_info3" ).css( "display", "none" );
    }
}

function select_info2(){
    let turn_A = document.getElementsByClassName('turn_A')[0];
    let turn_B = document.getElementsByClassName('turn_B')[0];
    if (turn_A.style.display!=='none') {

    }
    else {
        this.setbtn('btn_b1','-');
        this.setbtn('btn_b2','+');
        this.setbtn('btn_b3','-');
        $( ".comment_type.commet_info1" ).css( "display", "none" );
        $( ".comment_type.commet_info2" ).css( "display", "" );
        $( ".comment_type.commet_info3" ).css( "display", "none" );
    }    
}

function select_info3(){
    let turn_A = document.getElementsByClassName('turn_A')[0];
    let turn_B = document.getElementsByClassName('turn_B')[0];
    if (turn_A.style.display!=='none') {

    }
    else {
        this.setbtn('btn_b1','-');
        this.setbtn('btn_b2','-');
        this.setbtn('btn_b3','+');
        $( ".comment_type.commet_info1" ).css( "display", "none" );
        $( ".comment_type.commet_info2" ).css( "display", "none" );
        $( ".comment_type.commet_info3" ).css( "display", "" );        
    };  
}

