<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
	$('#tapt').on("tap",function(){
        var r=random();
        alert(r);
        navigator.notification.beep(1);	//beep once
 	}); 

});
function random() {
	return !Math.round(Math.random());
}
