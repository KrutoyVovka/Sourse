$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function(){}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIУ ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie;
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
})