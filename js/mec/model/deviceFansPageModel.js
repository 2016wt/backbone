define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"deviceFansPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("deviceFansPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                }
            
        });
});