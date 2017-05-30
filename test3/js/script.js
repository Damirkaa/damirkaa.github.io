//For menu in header
var elem = document.querySelectorAll('.menu_click');
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener('click', onToggleBtn, false);
}
function onToggleBtn() {
	var menu = this.nextElementSibling;
	var arrow = this.children[0];
	var width_li = this.children[0].parentNode.parentNode.offsetWidth;
	menu.classList.toggle('js_submenu');
	menu.style.width = width_li + 'px';
	if (arrow.style.transform !== 'rotate(180deg)') {
		arrow.style.transform = 'rotate(180deg)';
	} else {
		arrow.style.transform = 'rotate(0)';
	}
}

//Blocks 6
var cont_left = document.querySelector('.content_left');
var main_cont = document.getElementById('content');
cont_left.style.height = main_cont.clientHeight - 30 + 'px';
var elem6 = document.querySelectorAll('.remove');
for (var i = 0; i < elem6.length; i++) {
	elem6[i].addEventListener('click', removeLi, false);
	}
document.querySelector('.with_plus').onclick = function() {
	//create li
	var li = document.createElement('li');
	li.className = 'hov';
	var fontawes = document.createElement('i');
	fontawes.className = 'fa fa-trash-o remove';
	var fontawes2 = document.createElement('i');
	fontawes2.className = 'fa fa-pencil-square edit';
	fontawes.setAttribute('aria-hidden',true);
	li.appendChild(fontawes2);
	li.appendChild(fontawes);
	this.parentNode.insertBefore(li, this);
	//create li conclusion
	var elem6 = document.querySelectorAll('.remove');
	for (var i = 0; i < elem6.length; i++) {
	elem6[i].addEventListener('click', removeLi, false);
	main_cont = document.getElementById('content');
	//set height
	cont_left.style.height = main_cont.clientHeight - 30 + 'px';
	}
	var btn = document.querySelectorAll('.edit');
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', openPopup, false);
	}
}
function removeLi(){
	this.parentNode.remove();
}

//Popup
var modal = document.getElementById('myModal');
var btn = document.querySelectorAll('.edit');
var span = document.getElementsByClassName('close')[0];
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click', openPopup, false);
}
function openPopup() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function get_name_browser(){
    var ua = navigator.userAgent;    
    if (ua.search(/Chrome/) > 0) return 'Google Chrome';
    if (ua.search(/Firefox/) > 0) return 'Firefox';
    if (ua.search(/Opera/) > 0) return 'Opera';
    if (ua.search(/Safari/) > 0) return 'Safari';
    if (ua.search(/MSIE/) > 0) return 'Internet Explorer';
    return 'Не определен';
}
var browser = get_name_browser();

//scroll
var main_block = document.querySelector('.for_scroll');
var long = main_cont.offsetTop;
var left_menu = document.querySelector('.content_left_menu');
var left_menu_after = document.querySelector('.content_left_menu_after');
var flag = true;
var flag2 = false;
if ((screen.width > 1024) && (browser == 'Google Chrome') ) {
	window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var scrolled_round = Math.round(scrolled);
		var coordinates_left_menu_after = left_menu_after.getBoundingClientRect();
		var distance = coordinates_left_menu_after.top - (left_menu.offsetTop + left_menu.offsetHeight);
		if (distance < 20){
			flag3 = true;
		}
		else
		{
			flag3 = false;
		}
		if ((scrolled >= 200) && (flag3 == false)) { 
		left_menu.classList.add('content_left_menu_afterscroll');
		left_menu_after.classList.add('content_left_menu_after_afterscroll');
		cont_left.classList.add('content_left_afterscroll');}
		else if ((scrolled < 200) || (flag3 == true)) {			
		left_menu.classList.remove('content_left_menu_afterscroll');
		left_menu_after.classList.remove('content_left_menu_after_afterscroll');
		cont_left.classList.remove('content_left_afterscroll');}

	if (scrolled_round == 0) { flag = true;flag2 = false}
		if  ((flag == true) && (flag2 == false)) {
		if ((scrolled_round != 0) && (scrolled_round < 200)) 
	  	{
	  		start_timer();
	  		function start_timer()
	  		{
	  			if (scrolled_round < 200)
	  			{
	  				scrolled_round = scrolled_round + 2;
		  			window.scrollTo(0,scrolled_round);
		  			requestAnimationFrame(start_timer);
	  			}
	  		}; 
	  		window.scrollTo(0,200);
	  		if (scrolled_round == 200) {
	  			flag2 = true;
	  		}	
	  	};
	}
		if (scrolled_round == 200) { flag = false;flag2 = true}	
		  	if ((flag == false) && (flag2 == true)) {
			if (scrolled_round < 200) 
			{   
				start_timer1();
		  		function start_timer1()
		  		{
		  			if (scrolled_round > 0) 
		  			{
		  				scrolled_round = scrolled_round - 2;
			  			window.scrollTo(0,scrolled_round);
			  			requestAnimationFrame(start_timer1);
		  			}
		  		};
		  		window.scrollTo(0,0);
	  		  	if (scrolled_round == 0) {
				flag2 = false;
				}
			}	
		}
	};
}