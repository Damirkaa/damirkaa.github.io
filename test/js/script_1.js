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

$("#hide").click(function(){
	var $part1=$(".right").width();
	if ($part1=="485") {
		$(".right").animate({width:'50px'},900);
		$(".h1").hide();
		$(".h2").hide();
		$(".discription").hide();
		$("#slider").hide();
		$("#carouselLeft").hide();
		$("#carouselRight").hide();
		$(".time").hide();
		$(".stars").hide();
		$(".h3").animate({opacity:'1'},900);
		$("#food").animate({marginLeft:'0'},900);
	}
	else{
		$(".right").animate({width:'485px'},900,function(){$(".time").delay(900).show();});
		$(".h1").show();
		$(".h2").show();
		$(".discription").show();
		$("#slider").show();
		$("#carouselLeft").show();
		$("#carouselRight").show();
		$(".stars").show();
		$(".h3").animate({opacity:'0'},900)
		$("#food").animate({marginLeft:'-40%'},900);
	}
});

$(document).ready(function (){
	var $st1=$("#star1");
	var $st2=$("#star2");
	var $st3=$("#star3");
	var $st4=$("#star4");
	var $st5=$("#star5");
	var mark;

	$($st1.hover(
		function(){
		$st1.css("color","#FFD700");
		},
		function(){
		$st1.css("color","");
		}
	))

	$($st2.hover(
		function(){
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		},
		function(){
		$st1.css("color","");
		$st2.css("color","");
		}
	))

	$($st3.hover(
		function(){
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		},
		function(){
		$st1.css("color","");
		$st2.css("color","");
		$st3.css("color","");
		}
	))

	$($st4.hover(
		function(){
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		$st4.css("color","#FFD700");
		},
		function(){
		$st1.css("color","");
		$st2.css("color","");
		$st3.css("color","");
		$st4.css("color","");
		}
	))

	$($st5.hover(
		function(){
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		$st4.css("color","#FFD700");
		$st5.css("color","#FFD700");
		},
		function(){
		$st1.css("color","");
		$st2.css("color","");
		$st3.css("color","");
		$st4.css("color","");
		$st5.css("color","");
		}
	))

	$st1.click(function(){
		$st1.unbind();
		$st2.unbind();
		$st3.unbind();
		$st4.unbind();
		$st5.unbind();
		$st1.css("color","#FFD700");
		mark=1;
	})

	$st2.click(function(){
		$st1.unbind();
		$st2.unbind();
		$st3.unbind();
		$st4.unbind();
		$st5.unbind();
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		mark=2;
	})

	$st3.click(function(){
		$st1.unbind();
		$st2.unbind();
		$st3.unbind();
		$st4.unbind();
		$st5.unbind();
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		mark=3;
	})

	$st4.click(function(){
		$st1.unbind();
		$st2.unbind();
		$st3.unbind();
		$st4.unbind();
		$st5.unbind();
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		$st4.css("color","#FFD700");
		mark=4;
	})

	$st5.click(function(){
		$st1.unbind();
		$st2.unbind();
		$st3.unbind();
		$st4.unbind();
		$st5.unbind();
		$st1.css("color","#FFD700");
		$st2.css("color","#FFD700");
		$st3.css("color","#FFD700");
		$st4.css("color","#FFD700");
		$st5.css("color","#FFD700");
		mark=5;
	})
});