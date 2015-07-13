define([//'jquery', 
        'underscore', 'backbone','text!page/05-8-1-1_GesturePW.html',
        'mec/model/gesturePWPageModel'
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
    }

  });
});