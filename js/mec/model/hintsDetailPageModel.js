define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"hintsDetailPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("hintsDetailPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                }
            
        });
});