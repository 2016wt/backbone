define([//'jquery', 
        'underscore', 'backbone','text!page/03-6-2-1_spotsNearby.html',
        'mec/model/spotsNearbyPageModel'
        ], 
function(//$, 
		_, Backbone, mainView,mainModel){

  return cpmView = Backbone.View.extend({
	  
    template:_.template(mainView),
   
    initialize : function() {
    	
    },
    
    refresh: function(){
    	
    },
    
    render: function(){
      $(this.el).empty();
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
      events: {
          'click .miscellaneousPage':'showMiscellaneousPage'
      },
      showMiscellaneousPage:function(){
          window.AppRouter.showMiscellaneousPage();
      }

  });
});