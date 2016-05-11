/*
Website		Heart of Glass
Version		0.1
Design		Luke Archer
Code		Luke Archer
*/


/* VARIABLES - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var spin = {},
	spinner = true,
	curr = 0,
	images,
	ajaxURL = ajaxurl,	
	images2,
	nativeTransition,
	nativeTransform,
	nativeTransitionEnd,
	scrollU = false,
	scrollS,
	pClose;

/* BROWSER PREFIXES - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
nativeTransition =
	'Transition' in document.body.style && 'transition' ||	
	'WebkitTransition' in document.body.style && '-webkit-transition' ||
	'MozTransition' in document.body.style && '-moz-transition' ||
	'msTransition' in document.body.style && '-ms-transition' ||
	'OTransition' in document.body.style && '-o-transition';
	
nativeTransform =
	'Transform' in document.body.style && 'transform' ||	
	'WebkitTransform' in document.body.style && '-webkit-transform' ||
	'MozTransform' in document.body.style && '-moz-transform' ||
	'msTransform' in document.body.style && '-ms-transform' ||
	'OTransform' in document.body.style && '-o-transform';
	
nativeTransitionEnd =
	'Transition' in document.body.style && 'transitionend' ||	
	'WebkitTransition' in document.body.style && 'webkitTransitionEnd' ||
	'MozTransition' in document.body.style && 'transitionend' ||
	'OTransition' in document.body.style && 'oTransitionEnd';
	
/* SET UP SPINNER - - - - - - - - - - - - - - - - - - - - - - - - - - - - */		
spin.element = null;

spin.setFrame = function(div, frame) {
	if(curr != frame) {
        $('.show').removeClass('show'); 
        images[frame].addClass('show');
		curr = frame;
	}
}

spin.mouseDown = function(event, div) {
	spin.element = div;
	div.fromX = event.screenX;
	div.from = curr;
}

spin.mouseUp = function(event) {
	if(!spin.element) return;		
	spin.element = null;
}

spin.mouseMove = function(event) {
	if(spin.element) {
		var frame = (spin.element.from + Math.round((spin.element.fromX - event.screenX) / 10)) % 18;
		if(frame < 0) frame += 18;
		spin.setFrame(spin.element, frame);
	}
}

function spinImages() {
	images = [];	
    var i,
	    lastY,
	    lastX;
    for (i = 1; i < 19; i++) {
		images.push(jQuery('#spin' + i));
    }
    
	// Spin touch controls
  	$("#spin").each(function() {
		this.ontouchmove = function(event) {
			event.screenX = event.touches[0].screenX;
			event.screenY = event.touches[0].screenY;
			var test = $(".panZoom").panzoom("isPanning");
			if (test == false) {
				if (event.screenY == lastY) {
					spin.mouseMove(event);
				}
			};
			lastY = event.screenY;
			// event.preventDefault(); 			
			return true;
		};
		
		this.ontouchend = function(event) {
			event.preventDefault();
			spin.mouseUp(event); 
			return true;
		};
		this.ontouchstart = function(event) {
			event.screenX = event.touches[0].screenX;
			spin.mouseDown(event, this);
			return true;
		};
	});    
};

/* INTRO SCROLL THROTTLE - - - - - - - - - - - - - - - - - - - - - - - - - - - - */		
/*
introThrottle = _.throttle(function() {
	var wS = $('#wrapper').scrollTop(),
		wH = $('#intro').height();
		
	if (wS == wH) {
		$.ajax({
			type: 'GET',
			url: ajaxURL,
			data: {"action": "splash"}
		});
							
		$('#wrapper').css('overflow','hidden').unbind('scroll');
		$('#intro').remove();
		$('.workCol').removeClass('noScroll');

		var stateDataObj = {
				pageType: iS.dataLink,
				pageId: iS.dataId,
				pageUrl: window.location.href
			};
		
		var toAdd = $("#content").html();			
		pages[stateDataObj.pageType+stateDataObj.pageId] = toAdd;																								
		History.replaceState(stateDataObj, document.title, stateDataObj.pageUrl);
	}				
}, 10);
*/

function introScroll() {
	var wS = $('#wrapper').scrollTop(),
		wH = $('#intro').height();
		
	if (wS == wH) {
		$.ajax({
			type: 'GET',
			url: ajaxURL,
			data: {"action": "splash"}
		});
							
		$('#wrapper').css('overflow','hidden').unbind('scroll');
		$('#intro').remove();
		$('.workCol').removeClass('noScroll');

		var stateDataObj = {
				pageType: iS.dataLink,
				pageId: iS.dataId,
				pageUrl: window.location.href
			};
		
		var toAdd = $("#content").html();			
		pages[stateDataObj.pageType+stateDataObj.pageId] = toAdd;																								
		History.replaceState(stateDataObj, document.title, stateDataObj.pageUrl);
	}				
};

/* DOCUMENT READY - - - - - - - - - - - - - - - - - - - - - - - - - - - - */		
$(document).ready(function() { 
		var loader = $('#spinOverlay'),
			sorting = $('#spinOverlay2');
			
			
/*
		window.onbeforeunload = function() {
			return "test";
		}
*/						
		
		// Pages
		pages = [];

		// History
		var History = window.History,
			urlPath,
			uniqueId;		
		
		// Initial history state			
		if (History.enabled) {
			var stateDataObj = {
					pageType: iS.dataLink,
					pageId: iS.dataId,
					pageUrl: window.location.href
				};
							
			var toAdd = $("#content").html();			
			pages[stateDataObj.pageType+stateDataObj.pageId] = toAdd;
			History.replaceState(stateDataObj, document.title, stateDataObj.pageUrl);
		} else {
			return false;
		}
		
		// Start content update		
		var updateContent = function(State) {
			var pageType = State.data.pageType,
				pageId = State.data.pageId,
				scrollN = State.data.scroll;
			
			$('#content').empty();															
							
			// Piece														
			if (pageType == 'piece') {
				scrollU = false;
				if (pageType+pageId in pages) {
					var data = pages[pageType+pageId],
						$old = $(data);
						$close = $old.find('#closePiece');
						$('#content').append($old);
						isTouch();						
						panZoom();
						spinImages();													
					$.ajax({
						dataType: "json",						
						type: 'POST',
						url: ajaxURL,
						data: {"action": "check"},
						success: function(newLink) {
							var filter = newLink.filter,
								id = newLink.id;
							if (filter) {
								$close.attr('href',homeURL+'/?filter='+filter+'&id='+id);								
								$close.attr('data-link','filter');
								$close.attr('data-id',filter+'-'+id);								
							} else {
								$close.attr('href',homeURL);
								$close.attr('data-link','home');
								$close.attr('data-id','');
							}												
						}
					});									
				} else {
					loader.show();					
					$.ajax({
						type: 'POST',
						url: ajaxURL,
						data: {"action": "piece", post_id: pageId },
						success: function(data) {
							$('#content').append(data);
							$('.panZoom').waitForImages(function() {
								loader.fadeOut(100);
								$('.panZoom').css('opacity',1);
								$('.panZoom img').each(function(){
									var $this = $(this);
										dataSrc = $this.attr('data-src');
										$this.attr('src',dataSrc);
								});
								pages[pageType+pageId] = $('#content').html();								
							});							
							isTouch();						
							panZoom();
							spinImages();						
						}
					});
				}					
			}
			
			// Home			
			if (pageType == 'home') {
				if (scrollU) {
					scrollU = false;
				} else {
					scrollU = false;					
					if (pageType+pageId in pages) {
						$('#content').empty();																					
						var data = pages[pageType+pageId]
						$('#content').append(data);
						$('#wrapper').on('scroll', introScroll);				
						if (pClose) {
							workS(scrollS);
							pClose = false;						
						} else {
							workS(scrollN);							
						}
						$.ajax({
							type: 'POST',
							url: ajaxURL,
							data: {"action": "clear"},
						});																		
					} else {
						loader.show();											
						$.ajax({
							type: 'POST',
							url: ajaxURL,
							data: {"action": "home", post_id: pageId },
							success: function(data) {
								pages[pageType+pageId] = data;
								$('#content').append(data);
								loader.fadeOut(100);															
								$('#wrapper').on('scroll', introScroll);
								if (pClose) {
									workS(scrollS);
									pClose = false;						
								} else {
									workS(scrollN);									
								}
							}
						});
					}
 				}														
			}
			
			// Search		
			if (pageType == 'search') {
				if (pageType+pageId in pages) {
					var data = pages[pageType+pageId]
					$('#content').append(data);
				} else {
					$.ajax({
						type: 'POST',
						url: ajaxURL,
						data: {"action": "search"},
						success: function(data) {
							pages[pageType+pageId] = data;
							$('#content').append(data);
						}
					});
				}					
			}
			
			// Filter						
			if (pageType == 'filter') {
				var arr = pageId.split('-');
					filter = arr[0],
					pageId = arr[1];				
				
				if (pageType+pageId in pages) {
					var data = pages[pageType+pageId]
					$('#content').append(data);
					if (pClose) {
						workS(scrollS);
						pClose = false;						
					} else {
						workS(scrollN);									
					}
				} else {
					sorting.show();																
					$.ajax({
						type: 'POST',
						url: ajaxURL,
						data: {"action": "home", post_id: pageId, filter: filter },
						success: function(data) {
							pages[pageType+pageId] = data;
							$('#content').append(data);
							sorting.fadeOut(100);																						
							if (pClose) {
								workS(scrollS);
								pClose = false;						
							} else {
								workS(scrollN);																	
							}
						}
					});
				}					
			}			
		};
		
		// Check scroll position of each column		
		function workS(s) {		
			var i = 0,
				s = s;	
			if (s !== undefined) {
				$('.workCol').each(function(){
					$(this).scrollTop(s[i]);
					i++;
				});				
			}			
		}			
		
		// Content update and back/forward button handler
		History.Adapter.bind(window, 'statechange', function() {
			updateContent(History.getState());							
		});
				
		// navigation link handler
		$(document).on('click', '.history', function(e) {								
			// Old state
			var State = History.getState(),
				pageType = State.data.pageType,
				pageId = State.data.pageId,
				pageUrl = State.data.pageUrl;
								
			if (pageType == 'home') {
				var s = [],
					i = 0;
				$('.workCol').each(function(){
					s[i] = $(this).scrollTop();
					i++;
				});
													
				var stateDataObj = {
						pageType: pageType,
						pageId: pageId,
						pageUrl: pageUrl,
						scroll: s
					};
					
				scrollS = s,		
				scrollU = true;
				History.replaceState(stateDataObj, 'ECAL - Heart of GLass '+title, urlPath);								
			}	
													
			var $this = $(this),
				urlPath = $this.attr('href'),
				title = $this.data('title'),
			stateDataObj = {
				pageType: $this.data('link'),
				pageId: $this.data('id'),
				pageUrl: urlPath
			};
				
			if ($this.is('#searchSub')) {
				var number = $('#searchLet').val().toLowerCase();
									
				$.ajax({
					type: 'POST',
					url: ajaxURL,
					data: {"action": "getid", post_name: number },
					success: function(data) {
						var output = JSON.parse(data);						
						title = number.toUpperCase();
						stateDataObj = {
							pageType: 'piece',
							pageId: output.id,
							pageUrl: output.url
						};
											
						History.pushState(stateDataObj, 'ECAL - Heart of GLass – '+title, output.url);	
					}
				});					
						
			} else if ($this.is('#closeFilter')) {
				$('#filtered').css({'top':'-62px'});
				$('#indexMiddleInner').css({'top':0});
				$('#indexMiddleInner').one(nativeTransitionEnd, function(){
					$('#wrapper').fadeOut(400, function(){
						History.pushState(stateDataObj, 'ECAL - Heart of GLass '+title, urlPath);															
					});					
				});				
			} else if ($this.is('#closePiece')) {				
				pClose = true;
				History.pushState(stateDataObj, 'ECAL - Heart of GLass '+title, urlPath);			
			} else {
				History.pushState(stateDataObj, 'ECAL - Heart of GLass '+title, urlPath);
			}				
			return false; 
		});
			  	
	/* INTRO - - - - - - - - - - - - - - - - - - - - - - - - - - - - */	
	$('#wrapper').on('scroll', introScroll);
		
	/* SPINNER - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// Initialise spin
	spinImages();
	  
	// Spin controls
	$(document).on('touchstart click', '#spinB', function(event){
		event.stopPropagation();
		event.preventDefault();
		if(event.handled !== true) {		
			$('.activeButton').removeClass('activeButton');
			$('#spinB').addClass('activeButton');			
			$(".panZoom").panzoom("option", "disablePan", true);		
			spinner = true;		
		    event.handled = true;
		} else {
		    return false;
		}
	});		
	 
	$(document).on('mousedown','#spin', function(event) {
		if (spinner) {
			spin.mouseDown(event, this);			
		}
		return true;
	});
	
	$(document).mousemove(function(event) {
		spin.mouseMove(event);
		return true;
	});
	 
	$(document).mouseup(function(event) {
		spin.mouseUp(event);
		return true;
	});
	
	$(document).mousedown(function(event) {
		return spin.element == null;
	});
	
	function isTouch() {
		var is_touch_device = 'ontouchstart' in document.documentElement;
	    if (is_touch_device) {
			$('#zoomControl').hide();	
	    };		
	}
	
	isTouch();
	
	// Spin scale and move
	function panZoom() {
		$(".panZoom").panzoom({
			disablePan: true,		
			minScale: 0.4,
			increment: 0.4,		
			maxScale: 5,
			duration: 300,
			easing: "ease-in-out",
			$zoomIn: $('#zoomIn'),
			$zoomOut: $('#zoomOut'),
			$zoomRange: $('#range'),					
			$zoomRange: $("input[type='range']")
		});
	};	
	
	panZoom();	
	
	$(document).on('touchstart click', '#move', function(event){
		event.stopPropagation();
		event.preventDefault();
		if(event.handled !== true) {		
			$('.activeButton').removeClass('activeButton');
			$('#move').addClass('activeButton');				
			$(".panZoom").panzoom("option", "disablePan", false);		
			spinner = false;		
		    event.handled = true;
		} else {
		    return false;
		}
	});	
	
	// Fullscreen
	var fullS = false,
		$imC = $('#imageCol');
	
	$(document).on('click', '#fullS', function(){
		$imC = $('#imageCol');		
		if (fullS) {
			var fW;
			if ($('#middle').hasClass('notRelated')) {
				fW = '75%';
			} else {
				fW = '62.5%';
			};			
			$('#fullS').text('b');			
			
			$imC.removeClass('notransition');
			$imC[0].offsetHeight;		 					
			$imC.removeAttr('style');
			$imC.one(nativeTransitionEnd, function(){
				$imC.addClass('notransition');
			});			
					 			
			$('#rightCol').css('transform','translateX(0)');			
			fullS = false
		} else {
			$('#fullS').text('a');						
			$imC.removeClass('notransition');
			$imC[0].offsetHeight;		 					
			$imC.css('width','100%');
			$imC.one(nativeTransitionEnd, function(){
				$imC.addClass('notransition');
			});						 			
			$('#rightCol').css('transform','translateX(100%)');
			fullS = true;
		}		
	});	
  
	// Slideshow  
	$(document).on('click', '#descColImages img', function(){
		var $this = $(this),
			sC = $this.attr('data-count');
			
		$.ajax({
			type: 'POST',
			url: ajaxURL,
			data: {"action": "gallery", post_id: iS['dataId'] },
			success: function(data) {
				var output = JSON.parse(data);										
				$('#slides').append(output.data).show();
				var $cur = $(".slide[data-count='" + sC +"']");
				$cur.addClass('current');
				if (output.count == 1) {
					$('#left').hide();
					$('#right').hide();	
					$('#slideText').width('100%');				
				} else {
					$('#left').show();
					$('#right').show();
					$('#slideText').width('75%');															
				}			
			}
		});			
	});
	
	$(document).on('click', '#slideRight, #slideLeft', function(){		
		var $this = $(this),
			$cur = $('.current');
			
		if ($this.is('#slideRight')) {
			$next = $cur.next('.slide');
			if ($next.length == 0 ) {
				$next = $('#slides .slide').first();		
			}						
		}
		
		if ($this.is('#slideLeft')) {
			$next = $cur.prev('.slide');
			if ($next.length == 0 ) {
				$next = $('#slides .slide').last();		
			}						
		}		
						
		$cur.removeClass('current');		
		$next.addClass('current');	
	  		
		return false;
	 });
	 
	$(document).on('click', '#closeSlide', function(){
		$('#slides').hide();
		return false;						
	});	 
	 
 	/* MOBILE - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	if ($('body').hasClass('mobile')) {
 		  	  
	}											
});