// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__body').click(function(){
    $('.nav__icon, .nav__body').removeClass('active');
    $('body').removeClass('lock');
});

//features__slider
$(document).ready(function(){
	$('.features__slider-content').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows:false,
    dots:true,
    autoplay: false,
    speed:450,
    infinite: false,
    autoplaySpeed: 5000,
	
	});
});

//button to top
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop()>300){
    $('.scroll-top').fadeIn(250);
}
else{
    $('.scroll-top').fadeOut(250);
}
  });
  $('.scroll-top').click(function(){
$('html,body').animate(
    {scrollTop:0},400
);
  });
});


//Slideshow bg

$('.banner').fullClip({
  images: ['img/banner5.jpg','img/banner.png', 'img/banner3.jpg','img/banner6.jpg','img/banner2.jpg'],
  transitionTime: 2200,
  wait: 4000
});

//Спойлеры

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__content').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});





//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


//Плавающая шапка
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});




//Дата в форме
let today = new Date().toISOString().substr(0, 10);
document.querySelector("#date").value = today;