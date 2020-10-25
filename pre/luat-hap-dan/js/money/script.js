$.fn.isOnScreen=function(a){a||(a=0);var b={};b.top=$(window).scrollTop(),b.bottom=b.top+$(window).height();var c={};return c.top=this.offset().top+a,c.bottom=c.top+this.outerHeight()-a,c.top<=b.bottom&&c.bottom>=b.top};var _bxInnit=function(a,b){function j(){return g=$(a).bxSlider(i),!0}function k(){switch(d.view){case"mobile":e.initBreakpoint=e.windowWidht<e.breakPoint,e.resizeBreakpointMore=e.windowWidht>=e.breakPoint,e.resizeBreakpointLess=e.windowWidht<e.breakPoint;break;case"desktop":e.initBreakpoint=e.windowWidht>=e.breakPoint,e.resizeBreakpointMore=e.windowWidht<e.breakPoint,e.resizeBreakpointLess=e.windowWidht>=e.breakPoint,e.resizeBreakpointLess;break;case"all":e.initBreakpoint=!0,e.resizeBreakpointMore=!1,e.resizeBreakpointLess=!1}}if(!$(a).length)return!1;var g,c={view:"all"},d=$.extend(c,b),e={breakPoint:668,sliderActive:!1,initBreakpoint:null,resizeBreakpointMore:null,resizeBreakpointLess:null,windowWidht:window.innerWidth},f=!1,h=$(a).clone(),i=b;f&&(j(),e.sliderActive=!0),k(),e.initBreakpoint&&(j(),e.sliderActive=!0),$(window).resize(function(){e.windowWidht=window.innerWidth,k(),e.resizeBreakpointMore&&e.sliderActive&&(g.destroySlider(),e.sliderActive=!1,g.replaceWith(h.clone())),e.resizeBreakpointLess&&(e.sliderActive||(j(),e.sliderActive=!0))});var l,m;l=1,m=0,$(window).on("scroll",function(){1==e.sliderActive&&(m=g.isOnScreen()?1:0,l==m?g.startAuto():g.stopAuto())})};


$(document).ready(function(){
	var sb = $(".right_block");
  var sb_ot = sb.offset().top;
  var sb_ol = sb.offset().left;
	$(window).scroll(function() {
    var st = $(window).scrollTop();
    if(st > sb_ot) {
    	sb.css({
    		'position': 'fixed',
    		'top': '0',
    		'left': sb_ol
    	})
    }
    else {
    	sb.css({
    		'position': 'static',
    		'top': '0'
    	})
    }
	});

	_bxInnit('.wap_slider', {
      view: 'mobile',
      adaptiveHeight: true,
      swipeThreshold: 40,
      controls: false,
      pager: true,
      auto: true,
      pause: 10000,
      autoHover: true,
      infiniteLoop: true,
      slideMargin: 3,
      // nextText: '',
      // prevText: ''
  });
});
