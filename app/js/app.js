document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

})
// var slideNow = 1;
// var slideCount = $('.slidewrapper').children().length;
// var slideInterval = 2000;
// var navBtn = 0;
// var translateWidth = 0;


// $(document).ready(function() {
//     var switchInterval = setInterval(nextSlide, slideInterval);
    

//     $('.viewport').hover(function() {
//         clearInterval(switchInterval);
//     }, function() {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });

//     $('.next-btn').click(function() {
//         nextSlide();
//     });

//     $('.prev-btn').click(function() {
//         prevSlide();
//     });

//     $('.slide-nav-btn').click(function() {
//         navBtn = $(this).index();

//         if (navBtn + 1 != slideNow) {
//             translateWidth = -$('.viewport').width() * (navBtn);
//             $('.slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = navBtn + 1;
//         }
//     });
// });


// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('.slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('.viewport').width() * (slideNow);
//         $('.slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }

// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateWidth = -$('.viewport').width() * (slideCount - 1);
//         $('.slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow = slideCount;
//     } else {
//         translateWidth = -$('.viewport').width() * (slideNow - 2);
//         $('.slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow--;
//     }
// }


$(function(){

var slider = $('.slider');

slider.slick({
    dots:true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
})

$('.btn_slider_1').on('click',function(){
    slider.slick('slickNext')
});
$('.btn_slider_2').on('click',function(){
    slider.slick('slickPrev')
});

});

/* function replace_phone_call($matches)
{
	$tel = str_replace(array('-', ' ', '(' , ')'), '', $matches[0]);
	$tel = str_replace('+3', '8', $tel);
	return '<a href="tel:' . $tel . '">' . $matches[0] . '</a>';
}
 
function replace_phone($text)
{
	return preg_replace_callback('/(?:\+|\d)[\d\-\(\) ]{9,}\d/', 'replace_phone_call', $text);
}
 
$text = 'Позвоните по телефону +38 (095) 806-36-71, или 0958063671';
echo replace_phone($text); */
