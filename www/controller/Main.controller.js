sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.controller.Main", {
		
		
		
		handleGroup : function (evt) {

			//  sorters
			var sorters = [];
			var item = evt.getParameter("selectedItem");
			var key = (item) ? item.getKey() : null;
			var list = this.getView().byId("table");
			var oBinding = list.getBinding("items");
			
			if(key =="NameKey"){
				sorters.push(new sap.ui.model.Sorter("name", false, oBinding));
				oBinding.sort(sorters);
			}
			else if(key =="StatusKey"){
				sorters.push(new sap.ui.model.Sorter("status", true, oBinding));
				oBinding.sort(sorters);
			}else {
				oBinding.sort();
			}
		
				
			
		}
	

	});
});