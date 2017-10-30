sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.controller.Main", {
		
		mailBtnClick: function(oEvt){
			var sEmail = oEvt.getSource().getCustomData()[0].getValue();
			sap.m.URLHelper.triggerEmail(sEmail, "Subject", "Hi"); 
		},

		phoneBtnClick: function(oEvt){
			var sPhone = oEvt.getSource().getCustomData()[0].getValue();
			sap.m.URLHelper.triggerTel(sPhone); 
		}
		
		
	});
});