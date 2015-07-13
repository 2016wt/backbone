define(['underscore', 'backbone', 'controller/router','jqmconfig'], 
	function(_, Backbone, Router) {

	'use strict';
	var init=function(){
		var router=window.AppRouter=new Router();
		
		Backbone.history.start();
		return router;
	};

    return{
	    initialize:init
    };
});