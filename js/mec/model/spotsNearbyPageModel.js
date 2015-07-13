define(['backbone', 'underscore','localstorage'], 
function(Backbone, _) {
        return Backbone.Model.extend({
        		defaults: {},
        	    modelName:"spotsNearbyPageModel",
            	//	fetchSuccessfull:false,
            	fetchFromLocalStorageSuccessfull:false,
            	
        	    localStorage: new Backbone.LocalStorage("spotsNearbyPageModel"),
        	    
                initialize : function() {
                	var _this = this;
                }
        });
});