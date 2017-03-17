$(".fa-bars").click(function(e) {
    var $menu = $("#menu_main");
 
    if ($menu.css('display') != 'block') {
        $menu.show();
 
        var firstClick = true;
        $(document).bind('click.myEvent', function(e) {
            if (!firstClick && $(e.target).closest("#menu_main").length == 0) {
                $menu.hide();
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
    e.preventDefault();
});

$(window).resize(function(){
var winBr = $(window).width();
if(winBr>750){$("#menu_main").css("display","inline-block");}
else{
	$("#menu_main").css("display","none");
}
});  