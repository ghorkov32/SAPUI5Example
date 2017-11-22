sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "SAPUI5ExampleSAPUI5Example/model/models"

], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("SAPUI5ExampleSAPUI5Example.Component", {

        metadata: {
            manifest: "json"
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);


            // create the views based on the url/hash
            this.getRouter().initialize();

            this.setModel(models.createDeviceModel(), "device");

            this.loadPlantOperator();
        },

        loadPlantOperator: function () { //Modify PlantInformation model added operatorsNumber *Laborde Natalia
            var oPlanJsonModel = this.getModel("oPlantInfo");
            var oOperatorJsonModel = this.getModel("operators");
            var that = this;
            oPlanJsonModel.attachRequestCompleted(
                function () {
                    oOperatorJsonModel.attachRequestCompleted(
                        function () {
                            var oOperatorModel = that.getModel("operators").getProperty("/Operators");
                            var oPlantModel = that.getModel("oPlantInfo").getProperty("/Plants");
                            var another = that;
                            oPlantModel.forEach(function (oPlant) {
                                var number = 0;
                                var other = another;
                                oOperatorModel.forEach(function (oGetProperty) {
                                    var scope = other;
                                    if (oGetProperty.plant.length !== 0) {
                                        if (oPlant.plantCode === oGetProperty.plant) {
                                            oPlant.operatorsNumber = ++number;
                                            scope.getModel("oPlantInfo").updateBindings();
                                        }
                                    }
                                })
                            })
                        }
                    )
                }
            )
        }
    });
});