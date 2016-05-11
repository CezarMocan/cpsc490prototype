// Fade In duration in milliseconds
var fade = 500;


// Check for Internet Explorer
var IE = /*@cc_on!@*/false;

function findPosY(obj) {
	var curtop = 0;
	if(obj.offsetParent)
		while(1) {
			curtop += obj.offsetTop;
			if(!obj.offsetParent)
				break;
	  		obj = obj.offsetParent;
		}
	else if(obj.y)
		curtop += obj.y;
	return curtop;
}

function findPosX(obj) {
	var curleft = 0;
	if(obj.offsetParent)
		while(1) {
			curleft += obj.offsetLeft;
			if(!obj.offsetParent)
				break;
			obj = obj.offsetParent;
		}
	else if(obj.x)
		curleft += obj.x;
	return curleft;
}



function ShowPopup(divName,ho) {
	var obj = document.getElementById(divName); 
//	if( ! IE ) {
		obj.style.visibility = 'visible';
		obj.style.top = findPosY(ho) + 'px';
		obj.style.left = '830px';
//	} else {
//		$("div#"+divName).css('visibility', 'visible');
//		$("div#"+divName).css('y', ho.y);
//		$("div#"+divName).css('x', ho.x + (ho.width + 18));
//	}
}

function HidePopup(element) {
	hp = document.getElementById(element);
	if (element == "photoPop") {
		$("div.photoPop").fadeOut("def");
		setTimeout("hp.style.display='none';hp.style.top=0;hp.style.left=0;",400);
	}
	if (element == "exhibitPop") {
		$("div.exhibitPop").fadeOut("def");
		setTimeout("hp.style.display='none';hp.style.top=0;hp.style.left=0;",400);
	}
	if (element.indexOf("ook") > 0) {
		hp.style.visibility = "hidden";
		hp.style.top = 0;
		hp.style.left = 0;
	}
}

function ClosePopup(element) {
	hp = document.getElementById(element);
	if (element == "photoPop") {
		hp.style.display = "none";
	}
	if (element == "exhibitPop") {
		hp.style.display = "none";
	}
	hp.style.top=0;
	hp.style.left=0;
}
				
function hideMenuHighlights(p) {
	if( p == 'exhibit' ) {
		document.getElementById('exhibitNav').src='images/nav_exhibit_over.gif';
		document.getElementById('photoNav').src='images/nav_photos_off.gif';
	} else if( p == 'photo' ) {
		document.getElementById('exhibitNav').src='images/nav_exhibit_off.gif';
		document.getElementById('photoNav').src='images/nav_photos_over.gif';
	} else {
		document.getElementById('exhibitNav').src='images/nav_exhibit_off.gif';
		document.getElementById('photoNav').src='images/nav_photos_off.gif';
	}
	document.master.photoUp.value=0;
	ClosePopup('photoPop');
	document.master.exhibitUp.value=0;
	ClosePopup('exhibitPop');
}

var fadeInDelay;
function applyTransparency(id) {
	if(fadeInDelay) {
		clearTimeout(fadeInDelay)
		$('#' +id+ '').fadeTo('fast', 1.0, function() { });
	}
	$('img.thumb:not(#' +id+ ')').fadeTo('fast', 0.2, function() { });
}

function removeTransparency(obj) {
	fadeInDelay = window.setTimeout('fadeItBack()', 500);
}

function applyBookTransparency(id) {
	if(fadeInDelay) {
		clearTimeout(fadeInDelay)
		$('#' +id+ '').fadeTo('fast', 1.0, function() { });
	}
	$('img.spine:not(#' +id+ ')').fadeTo('fast', 0.2, function() { });
}

function removeBookTransparency(obj) {
	fadeInDelay = window.setTimeout('fadeBookBack()', 500);
}

function fadeBookBack() {
	$('.spine').fadeTo('fast', 1.0, function() { });
	fadeInDelay = '';
}

function fadeItBack() {
	$('.thumb').fadeTo('fast', 1.0, function() { });
	fadeInDelay = '';
}

function changeImage(img, item) {
	img.src = 'images/' +item;
}

var timeout    = 0;
var closetimer = 0;
var ddmenuitem = 0;
var relateditem = 0;

function main_menu_open() {
	main_menu_canceltimer();
	main_menu_close();
	$(this).find('ul').maxZIndex({ inc: 5 });
	ddmenuitem = $(this).find('ul').css('visibility', 'visible');
}

function main_menu_close() {
	if( ddmenuitem )
		ddmenuitem.css('visibility', 'hidden');
}

function main_menu_timer() {
	closetimer = window.setTimeout(main_menu_close, timeout);
}

function main_menu_canceltimer() {
	if(closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}


function related_open() {
	related_canceltimer();
	related_close();
	$(this).find('ul').maxZIndex({ inc: 5 });
	relateditem = $(this).find('ul').css('visibility', 'visible');
}

function related_close() {
	if( relateditem )
		relateditem.css('visibility', 'hidden');
}

function related_timer() {
	closetimer = window.setTimeout(related_close, timeout);
}

function related_canceltimer() {
	if(closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

$.maxZIndex = $.fn.maxZIndex = function(opt) {
    /// <summary>
    /// Returns the max zOrder in the document (no parameter)
    /// Sets max zOrder by passing a non-zero number
    /// which gets added to the highest zOrder.
    /// </summary>    
    /// <param name="opt" type="object">
    /// inc: increment value, 
    /// group: selector for zIndex elements to find max for
    /// </param>
    /// <returns type="jQuery" />
    var def = { inc: 10, group: "*" };
    $.extend(def, opt);    
    var zmax = 0;
    $(def.group).each(function() {
        var cur = parseInt($(this).css('z-index'));
        zmax = cur > zmax ? cur : zmax;
    });
    if (!this.jquery)
        return zmax;

    return this.each(function() {
        zmax += def.inc;
        $(this).css("z-index", zmax);
    });
}


var divName = "cursorTrail"; // div that is to follow the mouse
function mouseX(evt) {
	if (!evt) 
		evt = window.event; 
	
	if (evt.pageX) 
		return evt.pageX;
	else if (evt.clientX)
		return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	else 
		return 0;
}

function mouseY(evt) {
	if (!evt)
		evt = window.event;
	
	if (evt.pageY) 
		return evt.pageY;
	else if (evt.clientY)
		return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	else 
		return 0;
}

function follow(evt) {
	// (must be position:absolute)
	var offX = 0; // X offset from mouse position
	var offY = -30; // Y offset from mouse position
	
	// hover must be farther away in IE to avoid flicker
	if( IE ) { offX += 5; offY -= 5; }

	if (document.getElementById) {
		var obj = document.getElementById(divName).style; 
		obj.visibility = 'visible';
		obj.left = (parseInt(mouseX(evt))+offX) + 'px';
		obj.top = (parseInt(mouseY(evt))+offY) + 'px';
	}
}

function followNext(evt) {
	// (must be position:absolute)
	var offX = -50; // X offset from mouse position
	var offY = -30; // Y offset from mouse position

	// hover must be farther away in IE to avoid flicker
	if( IE ) { offX -= 5; offY -= 5; }

	if (document.getElementById) {
		var obj = document.getElementById(divName).style; 
		obj.visibility = 'visible';
		obj.left = (parseInt(mouseX(evt))+offX) + 'px';
		obj.top = (parseInt(mouseY(evt))+offY) + 'px';
	}
}

function followEnd(evt) {
	// (must be position:absolute)
	var offX = -137; // X offset from mouse position
	var offY = -30; // Y offset from mouse position

	// hover must be farther away in IE to avoid flicker
	if( IE ) { offX -= 5; offY -= 5; }

	if (document.getElementById) {
		var obj = document.getElementById(divName).style; 
		obj.visibility = 'visible';
		obj.left = (parseInt(mouseX(evt))+offX) + 'px';
		obj.top = (parseInt(mouseY(evt))+offY) + 'px';
	}
}

function showHover(item, arrow) {
	if( item == 'next' ) {
		document.onmousemove = followNext;
	} else if( item == 'end' ) {
		document.onmousemove = followEnd;
	} else {
		document.onmousemove = follow;
	}
	var cursorDiv = document.getElementById('cursorTrail');
	
	if( item == 'back' ) {
		cursorDiv.innerHTML = 'Back';
		cursorDiv.style.width = '50px';
	} else if( item == 'previous' ) {
		cursorDiv.innerHTML = 'Previous';
		cursorDiv.style.width = '70px';
	} else if( item == 'return' ) {
		cursorDiv.innerHTML = 'Return to Selections';
		cursorDiv.style.width = '137px';
	} else if( item == 'enter' ) {
		cursorDiv.innerHTML = 'Enter';
		cursorDiv.style.width = '150px';
	} else if( item == 'intro' ) {
		cursorDiv.innerHTML = 'View Introduction';
		cursorDiv.style.width = '150px';
	} else if( item == 'book' ) {
		cursorDiv.innerHTML = 'View in BOOKS';
		cursorDiv.style.width = '110px';
	} else if( item == 'view' ) {
		cursorDiv.innerHTML = 'View Image';
		cursorDiv.style.width = '150px';
	} else if( item == 'next' ) {
		cursorDiv.innerHTML = 'Next';
		cursorDiv.style.width = '50px';
	} else if( item == 'end' ) {
		cursorDiv.innerHTML = 'Return to Selections';
		cursorDiv.style.width = '137px';
	}
}

function hideHover(item) {

	var cursorDiv = document.getElementById('cursorTrail');
	
	cursorDiv.innerHTML = '';
	cursorDiv.style.width = '0px';

}

function setCookie(c_name,value,expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}

function showBookIntro() {
	document.getElementById('intro').setAttribute('class', 'intro');
	document.getElementById('intro').style.visibility='visible';
}

function hideBookIntro() {
	setCookie('books_intro',"blah",1);
	document.getElementById('intro').setAttribute('class', 'intro_hidden');
	document.getElementById('intro').style.visibility='hidden';
//	document.getElementById('intro').style.width=0;
}


