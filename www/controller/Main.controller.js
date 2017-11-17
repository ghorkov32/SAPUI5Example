sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("SAPUI5ExampleSAPUI5Example.controller.Main", {

		onInit: function () {
			var oOperatorsModel = this.getOwnerComponent().getModel("operators");
			oOperatorsModel.attachRequestCompleted(
				function () {
					//Hagan su magia
                }
			)
        },


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
		},
		
		handlePressOpenMenu: function(oEvent) {//Open menu *Laborde Natalia
			var oButton = oEvent.getSource();

			
			if (!this._menu) {
				this._menu = sap.ui.xmlfragment(
					"SAPUI5ExampleSAPUI5Example.fragment.Menu",
					this
				);
				this.getView().addDependent(this._menu);
			}

			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		},
		
		handleMenuItemPress: function(oEvent) {//Menu navigation *Laborde Natalia
			
			var oItem =oEvent.getParameter("item").getText();
			
			switch (oItem){
			
			case "Plants List":
				var onRootPage = sap.ui.core.UIComponent.getRouterFor(this);
				onRootPage.navTo("Plants");
				break;
			case "Operators List":
				var onRootPage = sap.ui.core.UIComponent.getRouterFor(this);
				onRootPage.navTo("Main");
				break;
			     			
			}
			
		},
		
		
	});
});