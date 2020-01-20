function openChat() {
    document.getElementById('chatbox').style.display='block';
    $('.btn-chat').hide();
  }
  function closeChat() {
    document.getElementById('chatbox').style.display='none';
    $('.btn-chat').show();
  }
  $('form').submit(function () {
    var text=$(this).find("textarea[name='msg']").value();

    alert(text);
  });
// image slider
  


  


  
//chat fixed
var fix = document.getElementById('fix');
window.onscroll=function ()
{
  if(window.pageYOffset>100)
  {
    chat.style.position="fixed";
    chat.style.top =0;
  }
  else 
  {
    box.style.position="absolute";
    box.style.top=100;
  }
}

// sliding-page///////

var slideIndex, slides, dots, captionText;
function initGallery()
{
  slideIndex=0;
  slides=document.getElementsByClassName("slide-holder");
  slides[slideIndex].style.opacity=1;
  dots=[];
  var dotsContainer=document.getElementById("dotsContainer");
  for (i = 0; i < slides.length; i++) {
    var dot=document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dot.setAttribute("onclick","moveSlide("+i+")");
    dots.push(dot);
}
dots[slideIndex].classList.add("active");
}
initGallery();
function plusSlides(n) {
    moveSlide(slideIndex+n);
}
function moveSlide(n){
    var i;
    var current,next;
    var moveSlideAnimClass={
          forCurrent:"",
          forNext:""
    };
    var slideTextAnimClass;
    if(n>slideIndex) {
        if(n >= slides.length){n=0;}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimClass="slideTextFromTop";
    }else if(n<slideIndex){
        if(n<0){n=slides.length-1;}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightPrevSlide";
        slideTextAnimClass="slideTextFromBottom";
    }

    if(n!=slideIndex){
        next = slides[n];
        current=slides[slideIndex];
        for (i = 0; i < slides.length; i++) {
            slides[i].className = "imageHolder";
            slides[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
        captionText.style.display="none";
        captionText.className="captionText "+slideTextAnimClass;
        captionText.innerText=slides[n].querySelector(".captionText").innerText;
        captionText.style.display="block";
    }

}