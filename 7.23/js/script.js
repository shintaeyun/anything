$(document).ready(function() {
	$('#gnb>li').hover(function() {
	 $('.submenu',this).stop().slideDown();
	},function() {
	 $('.submenu',this).stop().slideUp();
	});
 
 
	var idx=0;
 
	var scnt = $('#slide>a').length - 1;
 
	slide();
 
 
	 function slide(){
		 ms = setInterval(function() {
			 $('#slide>a').eq(idx).animate({left: '-100%'},800).animate({left: '100%'},0);
			 idx == scnt? idx =0:idx++;
			 $('#slide>a').eq(idx).animate({left: 0},800);
		 },2000);
	 }
 
	$('#slide').hover(function() {
		 clearInterval(ms);
	}, function() {
		 slide();
	});
 
	$(window).scroll(function() {
		var dist = $(this).scrollTop();
		if(dist >= 500){
			$('.gotop').fadeIn();
		}else{
			$('.gotop').hide();
		}
	});
 
	$('.login').click(function() {
		 $('#loginPop').fadeIn();
		 $('#id').focus();
	});
	$('.close').click(function() {
		$('#loginPop').hide();
	})
 });