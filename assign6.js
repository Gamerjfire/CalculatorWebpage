function validateForm() {
    var firstName = document.forms["informationForm"]["firstName"].value;
	var lastName = document.forms["informationForm"]["lastName"].value;
	var address1 = document.forms["informationForm"]["address1"].value;
	var city = document.forms["informationForm"]["city"].value;
	var state = document.forms["informationForm"]["state"].value;
	var zipCode = document.forms["informationForm"]["zipCode"].value;
    if (firstName == "") {
        alert("First name must be filled out");
        return false;
	}
	if (lastName == "") {
        alert("Last name must be filled out");
        return false;
	}
	if (address1 == "") {
        alert("Address Line 1 must be filled out");
        return false;
	}
	if (city == "") {
        alert("City must be filled out");
        return false;
	}
	if (state == "") {
        alert("State must be filled out");
        return false;
	}
	if (zipCode == "") {
        alert("Zip Code must be filled out");
        return false;
	}
	
}