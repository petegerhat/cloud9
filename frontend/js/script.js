define(['controllerObject'], function(controllerObject) {
	
	console.log("Start mapping handlers");
	$('#next').on("click",controllerObject.nextStep);
	$('#previous').on("click",controllerObject.previousStep);
	$('#home').on("click",{screen:"welcome"},controllerObject.navigateTo);
	$('#startimport').on("click",{screen:"workflow"},controllerObject.navigateTo);
	$('#marketplace').on("click",{screen:"marketplace"},controllerObject.navigateTo);
	//$('#dbSelect').on("selectmenuchange",{},controllerObject.dbSelectChanged);
	//$('#dbLogin').on("click",{},controllerObject.dbLoginClicked);
	//$('#dbTable').on("click",{},controllerObject.dbTableClicked);
	console.log("End mapping handlers");
	
	/*
	function nextClicked() {
		controllerObject.nextStep();
	}

	function previousClicked() {
		controllerObject.previousStep();
	}

	function homeClicked() {
		controllerObject.navigateTo("Welcome");
	}

	function startImportClicked() {
		controllerObject.navigateTo("Workflow");
	}

	function marketplaceClicked() {
		controllerObject.navigateTo("Marketplace");
	}


	function dbSelectChanged() {

	}

	function dbLoginClicked() {

	}

	function dbTableClicked() {

	}
	*/
});
