	var isMobile={Android: function() {return navigator.userAgent.match(/Android/i)},BlackBerry: function(){}};
if(isMobile.any()){}

if(location.hash){
		var hsh=location.hash.replace('#','');
	if($('.popup-'+hsh).length>0){
		popupOpen(hsh);
	}else if($('div.'+hsh).length>0){
		$('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
	}
}
$('.wrapper').addClass('loaded');

	var act="click";
if(isMobile.iOS()){
	var act="touchstart";
}

$('.header-menu__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.header-menu').toggleClass('active');
	if($(this).hasClass('active')){
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')){
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	}
