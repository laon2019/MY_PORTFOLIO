//1.gnb 마우스오버, 포커스시 밑줄 => span.bar
$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left;
        var widNum = $(this).width();
       $('span.bar').css({'left':bar + 'px', 'width':widNum + 'px', opacity:1});
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':0, 'width':0, 'opacity':0});
    });
});


//2.스크롤애니메이션
$(function(){
   $('.animate').scrolla({
       mobile: true,  //모바일버전시 활성화
       once: true //스크롤시 딱 한번만 하고 싶을 땐 true
   });
});

//3.배경색 변경
$(window).on('scroll resize', function(){
    var scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor(){
        if(scrollTop > 0){
            $('body').addClass('on');
            $('.customer').addClass('on');
            $('.customerTitle').addClass('on');
        }else {
            $('body').removeClass('on');
            $('.customer').removeClass('on');
            $('.customerTitle').removeClass('on');
        }
        // if(scrollTop > 2700){
        //     $('body').removeClass('on');
        // } 
    }
});

//4.햄버거 메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.style.display = "block";
    welcomeMessage.classList.add("shaking"); // Add the class for the shaking effect
  
    const text = "방문해주셔서 감사합니다.";
    let index = 0;
  
    function showNextCharacter() {
      if (index < text.length) {
        welcomeMessage.textContent += text.charAt(index);
        index++;
        setTimeout(showNextCharacter, 100); // Adjust the duration (milliseconds) between characters here
      } else {
        setTimeout(hideWelcomeMessage, 1000); // Wait for 3 seconds and then hide the welcome message
      }
    }
  
    function hideWelcomeMessage() {
      welcomeMessage.style.display = "none";
    }
  
    showNextCharacter();
  });  
  