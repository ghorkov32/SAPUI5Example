sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.controller.Main", {
			
		handleGroup : function (oEvt) {

			//  sorters
			var sorters = [];
			var item = oEvt.getParameter("selectedItem");
			var key = (item) ? item.getKey() : null;
			var list = this.getView().byId("table");
			var oBinding = list.getBinding("items");
			
			switch (key){
			
			case "NameKey":
				sorters.push(new sap.ui.model.Sorter("name", false, oBinding));
				oBinding.sort(sorters);
				break;
			
			case "StatusKey":
				sorters.push(new sap.ui.model.Sorter("status", true, oBinding));
				oBinding.sort(sorters);
				break;
				
			case "NoneKey":
				oBinding.sort();
				break;
				
			default:
				break;
			}
		},
                           
		
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