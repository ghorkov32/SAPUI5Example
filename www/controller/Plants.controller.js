sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"SAPUI5ExampleSAPUI5Example/util/formatter"
], function(Controller, History, formatter) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.controller.Plants", {

		formatter:formatter,
		
		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash) { 
				window.history.go(-1);
			} else {
				var onRootPage = sap.ui.core.UIComponent.getRouterFor(this);
				onRootPage.navTo("Main");
			}
		}
		

			
		
	});
});