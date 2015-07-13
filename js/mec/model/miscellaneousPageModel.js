define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"miscellaneousPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("miscellaneousPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                }
            
        });
});