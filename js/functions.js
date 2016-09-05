
<!--滑动展示窗口-->
$(window).load(function() {
	$('.big-slider').flexslider({
		animation: "slide",
		controlsContainer: ".slider-holder",
		slideshowSpeed: 3000,
		directionNav: true,
		controlNav: true,
		animationDuration: 1000
	});

});

 <!--风车旋转-->
 var angle1 = 0;
 setInterval(function(){angle1+=5;$('#arovane-small').rotate(angle1),1});
 <!--漂浮物-->
var flyimage1, flyimage2, flyimage3
function pagestart(){
flyimage1=new Chip("flyimage1",47,68);
flyimage2=new Chip("flyimage2",47,68);
flyimage3=new Chip("flyimage3",47,68);
movechip("flyimage1");
movechip("flyimage2");
movechip("flyimage3");
}
if (window.addEventListener)
window.addEventListener("load", pagestart, false)
else if (window.attachEvent)
window.attachEvent("onload", pagestart)
else if (document.getElementById)
window.onload=pagestart