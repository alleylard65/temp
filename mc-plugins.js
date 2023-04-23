/* ------------------------------------------------------------
"Functions" and "Plugins" Javascript file
------------------------------------------------------------ */

jQuery(document).ready(function () {
           // Tab - For Team Stats
            $("ul.teamTab li span").click(function (event) {
                 event.preventDefault();
                 $(this).parent().addClass("current");
                 $(this).parent().siblings().removeClass("current");
                 var Ptabs = $(this).attr("href");
                 $(".tabTeamContent").not(Ptabs).css("display", "none");
                 $(Ptabs).fadeIn();
             });
		    // Tab - For Tournament Stats
            $("ul.tourTab li span").click(function (event) {
                 event.preventDefault();
                 $(this).parent().addClass("current");
                 $(this).parent().siblings().removeClass("current");
                 var Ptabs = $(this).attr("href");
                 $(".tabTourContent").not(Ptabs).css("display", "none");
                 $(Ptabs).fadeIn();
             });
			 
			
			// Scorecard - Tab
			$('ul#scorecardTabs li').click(function () {
				var tab_id = $(this).attr('data-tab');
				$('ul#scorecardTabs li').removeClass('current');
				$('.mcTabContent').removeClass('current');
				$(this).addClass('current');
				$("#" + tab_id).addClass('current');
			});
			
			// For Ball by Ball
			// $('.bbbMC').bxSlider({ speed: 200,  minSlides: 5,  pager: false, maxSlides: 3, moveSlides: 4, slideMargin: 1, responsive: true  });
			
			 
			// Scroll bar
			$(".nicescroll_content").niceScroll({ 
			 cursorcolor: "#999",autohidemode:false, cursorwidth: "3px",cursorborder:"0px",cursorborderradius : "0px",  cursorfixedheight: 50, smoothscroll: true 
			});
			 
			 // List of Player Rolling Horizontal
             // $('.mcPlyRotList').bxSlider({ infiniteLoop: false, slideWidth: 1000, minSlides: 3, maxSlides: 2, pager: false, responsive: true, hideControlOnEnd: true,
             //    autoControlsCombine: true, adaptiveWidth: true });
				
			// Batsman Stats
			 $('.viewBatData').click(function () {
				 $('.mcPlyBat').toggle(); 
				 $(this).find('span').toggleClass('icon-plus-circled icon-minus-circled')
			}); 
			
			// Bowler Stats
			 // $('.viewBowData').click(function () {
				 // $('.mcPlyBow').toggle();
				 // $(this).find('span').toggleClass('icon-plus-circled icon-minus-circled') -->
			 // }); 
			
		    // Share 
			$('.sharePage').click(function () {
			   $('.ll').toggle();
			   $(this).find('span').toggleClass('openShare')
			});
			
			
			// Scroll bar
			$(".matchDetails .widgetContent").niceScroll({ 
			  cursorcolor: "#223d84", horizrailenabled: true, background: "#eeeeee",autohidemode:true, cursorwidth: "3px",cursorborder:"0px",cursorborderradius : "10px",  cursorfixedheight: 50, smoothscroll: true 
			});

});
       // Add to Calendar
	   // (function () {
    //         if (window.addtocalendar)if(typeof window.addtocalendar.start == "function")return;
    //         if (window.ifaddtocalendar == undefined) { window.ifaddtocalendar = 1;
    //             var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    //             s.type = 'text/javascript';s.charset = 'UTF-8';s.async = true;
    //             s.src = ('https:' == window.location.protocol ? 'https' : 'http')+'://addtocalendar.com/atc/1.5/atc.min.js';
    //             var h = d[g]('body')[0];h.appendChild(s); }})();

       // Page Loader
	   $(document).ready(function () {	         
		  $( window ).load(function() {
			setTimeout(function(){
			  $(".mcLoader").removeClass("loadingPage");
			},2000);
		  });
		});