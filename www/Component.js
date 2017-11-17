sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"SAPUI5ExampleSAPUI5Example/model/models"

], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("SAPUI5ExampleSAPUI5Example.Component", {

		metadata: {
			manifest: "json"
		},

		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
		
			// create the views based on the url/hash
			this.getRouter().initialize();

			this.setModel(models.createDeviceModel(), "device");
		}
		
	});
	
});