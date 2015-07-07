$(document).ready(function xp_Calculator() {
		//Calculation Handler
		$('#submit').on('tap', CalculateXp);
		
		//Add Info Handler
		$('#submit').on('tap', charInfoStorage);
		
		// Clear Handler
		$('#clearRuns').on('tap', clearInfo);
		
		//Load Level Information Handler
		$('#char').on('tap', charLevelInfo);
		
		//Preset Xp Values Handler
		$('#numValues').on('tap', presetValues);
		
		// Set Current Handler
		$(window).on('load', setCurrent);
		
		 //Enable Newly Earned Xp Input Handler
		//$(window).on('load', newInputActive);
		
		//Disable Newly Earned Xp Input Handler
		$(window).on('load', newXpInputDisable2);
		
	function CalculateXp() {
		var a = parseInt($("#currXp").val());
		var b = parseInt($("#newXp2").val());
		var c = parseInt($("#newXp").val());
		
		if(b != null) {
			$("input").remove("#newXp");
			var totalXp = a + b;		
		}
		if(c > 90) {
			var totalXp = a + c;
		}
		charInfoStorage(totalXp);
	}
			
	function charInfoStorage(totalXp){		
		var charName = $('#charName').val();
		var charLevel = parseInt($('#charLevel').val());
		var totalCharXp = totalXp;
		$("#newTotalXp").html(totalCharXp);
		
		var charInfo = charName;
		var charInfo2 = totalCharXp;
		var charInfo3 = charLevel;
			
		var name = new Array();
		var xp = new Array();
		var level = new Array();
			
		name.push(charInfo);
		xp.push(charInfo2);
		level.push(charInfo3);
		
		alert('Character Information Added');
		
		// Set stringified object to localStorage
		localStorage.setItem('name',name);
		localStorage.setItem('xp',xp);
		localStorage.setItem('level',level);
		
		// Redirect
		window.location.href="xpCalculator.html";		
		return false;
	}
	
	function clearInfo(){
		localStorage.clear();
		alert('Character Information Cleared');
		window.location.href="xpCalculator.html";
	}
	
	function presetValues() {
			$("#newXp").prop("disabled", false);
			$("#hiddenDropDown").removeClass("hidden");
	}
	
	function setCurrent(){
		var currentName = localStorage.getItem('name');		
		var currentXp = parseInt(localStorage.getItem('xp'));
		var currentLevel = parseInt(localStorage.getItem('level'));
		console.log(currentLevel);
					
		// Insert into field
		$('#charName').val(currentName);
		$('#currXp').val(currentXp);
		$('#charLevel').val(currentLevel);
		
		charLevelInfo(currentLevel, currentXp, currentName);
		
	 }
	 
	
	function charLevelInfo(currentLevel, currentXp, currentName) {
		
		var xPthreshold = [0,1000,3000,6000,10000,15000,21000,28000,36000,45000,55000,66000,78000,91000,105000,120000,136000,153000,171000,190000];
		var levelProgress = 0;
		var nextLevel = 0;
		var nextXpThreshold = 0;
		
		if (currentLevel <= 20) {
			var x = currentLevel;
			var nextXpThreshold = xPthreshold[x];	
			console.log(nextXpThreshold);
			var nextLevel = x + 1;
			console.log(nextLevel);
		}
		
		if(currentXp != null && nextXpThreshold != null) {
			var levelProgress = nextXpThreshold - currentXp;
		}
		
		$("#characterName").html("<p><strong>Character Name:</strong> " +currentName+"</p>");
		$("#characterLevel").html("<p><strong>Character Level:</strong> " +currentLevel+"</p>");
		$("#nextLevelCalc").html("<p>You are " + levelProgress + "xp away from level " + nextLevel + ".</p>");
	}
	
	function newXpInputDisable () {
		$("#newXp2").prop("disabled", true);
	}
	function newXpInputDisable2 () {
		$("#newXp").prop("disabled", true);
	}
	function newInputActive () {
		$("#newXp").prop("disabled", false);
	}
});