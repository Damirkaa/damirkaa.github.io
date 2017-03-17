
$("#see").click(function(e) {
    var $message = $("#search");
 
    if ($message.css('display') != 'inline-block') {
        $message.show();
 
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest("#search").length == 0) {
                $message.hide();
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
 
    e.preventDefault();
});

$("#baar").click(function(t) {
    var $message = $("#menu_bar");
 
    if ($message.css('display') != 'block') {
        $message.show();
 
        var firstClick = true;
        $(document).bind('click.myEvent', function(t) {
            if (!firstClick && $(t.target).closest("#menu_bar").length == 0) {
                $message.hide();
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
 
    t.preventDefault();
});



$(window).resize(function(){
var winBr = $(window).width();
if(winBr>900){$(".navigation ul").css("display","inline-block");}
else{
	$(".navigation ul").css("display","none");
}
});     


$(window).scroll(function(){
	if($(this).scrollTop()>100){$(".icon_top").fadeIn()}
		else{$(".icon_top").fadeOut()}
});

$(".icon_top").click(function(){
	$("body,html").animate({scrollTop:0},1500);
});

