sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.Router", {

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash) { 
				window.history.go(-1);
			} else {
				this.getRouter().navTo("Main", {}, true /*no history*/);
			}
		},
		
		toLaunchPad: function() {
			window.location.href = window.location.origin + window.location.pathname + "#";
		}

	});

});