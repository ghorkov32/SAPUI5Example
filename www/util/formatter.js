jQuery.sap.declare("SAPUI5ExampleSAPUI5Example.util.Formatter");
jQuery.sap.require("sap.ui.core.format.DateFormat");


SAPUI5ExampleSAPUI5Example.util.Formatter = {

 
		statusColorRow: function(oStatus) {
			
			
			
			switch (oStatus){
			
			case "On Duty":
				return "rowColorOnDuty";
				
				break;
			
			case "Off work":
				return "rowColorOffwork"
				
				break;
				
			case "Leave of absence":
				return "rowColorLeaveofabsence"
				
				break;
				
			default:
				break;
			
			}
             
				
			}

};

