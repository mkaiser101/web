$(document).ready(function() { //do on load document
		$("#add_page").show(); //show element with ID "dial_page"
		$("#contacts_page").hide(); //hide element with ID "contact_page"
		$("#gesture_page").hide();
		$("#alerty").hide();

});

$("#button_add").click(function() { // when "dial_butt" is clicked
	$("#add_page").show(); // show dial page
	$("#alerty").show(); 
	$("#contacts_page").hide();// hide contact page
});

$("#contact_butt").click(function() { // when "contact_butt" is clicked
	$("#dial_page").hide(); // hide dial page
	$("#contacts_page").show(); // show contact page
	$("#add_page").hide();	// hide add page
	$("#gesture_page").hide();
});

document.getElementById("button_add").className = "";
