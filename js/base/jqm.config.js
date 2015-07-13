define(["jquery"], function($){'use strict';
	  	$(document).bind("mobileinit", function () {
			$.support.cors = true;    
  			 $.mobile.allowCrossDomainPages = true;
			$.mobile.ajaxEnabled = false;
			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.pushStateEnabled = false;
			$.mobile.defaultPageTransition='slide';  //暂时改成none,其他的转场效果会出现白屏
		
			// Remove page from DOM when it's being replaced
			$(document).on('pagehide', 'div[data-role="page"]', function (event, ui) {
				         $(event.currentTarget).remove();
			});

		});

	  	require(["jqm"]);
});
