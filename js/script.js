
/*----------  Filter  ----------*/
$('#slick-buttons button').on('click', function (e) {
	if(!$(this).is('.active')){
  var filter = $(this).val();
  var key = "." + filter;
  slider = $('.slick-thumbs');
  
  $(this).addClass('active').siblings().removeClass('active');

  slider.slick('slickUnfilter');
  if(filter != 'All'){
         slider.slick('slickFilter', key);
      }
  //$('#slick, #slick-thumbs').slick('resize');
  //$('#slick').slick('slickSetOption', 'asNavFor', $currentSliderNav, false);
	}
});

/*
$('.list').click(function() {
    if(!$(this).is('.active')){
      var category = $(this).data('filter'),
          slider = $('.post-wrapper');
          
      $(this).addClass('active').siblings().removeClass('active');
      
      slider.slick('slickUnfilter'); //reset slider filter
      if(category != 'Tout'){
        slider.slick('slickFilter','.'+category);
      }
    }       
  })*/



$('#slick-thumbs').slick({
  infinite: false,
  rows: null,
  dots: true,
  arrows: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  mobileFirst: false,
  variableWidth: false,
  adaptiveHeight: false,
  focusOnSelect: true,
  prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>',
  responsive: [
  {
    breakpoint: 1280,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1 } },



  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3 ,
      slidesToScroll: 1 } },



  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1 } }] 
	  
});

$('.btn').click(function() {
    if(!$(this).is('.active')){
      var category = $(this).val();
          slider = $('.slick-thumbs');
          
      $(this).addClass('active').siblings().removeClass('active');
      
      slider.slick('slickUnfilter'); //reset slider filter
      if(category != 'All'){
        slider.slick('slickFilter','.'+category);
      }
    }       
  })
