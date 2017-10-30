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

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			var newModel = new sap.ui.model.json.JSONModel("./model/Operators.json");
			this.setModel(newModel, "operators");

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});