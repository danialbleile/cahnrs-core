jQuery(document).ready(function(){ var cahnrs_core_widget_sett = new cahnrs_core_widget_settings();});

var cahnrs_core_widget_settings = function(){
	this.edtr = jQuery( '#layout-editor');
	var s = this;
	
	s.be = function(){ // BIND EVENTS
		s.edtr.on('change','.activate-next',function(){});
	}
	
	s.act_n = function( ic ){ // ACTIVATE NEXT
		ic.next('select, input').removeClass('.inactive');
	}
	
	s.be();
}