function fname_validation() {
	var fname = document.querySelector("#FirstName");
	var fname_len = fname.value.length;
	if (fname_len == 0) {
		document.getElementById("fname error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("fname error").innerHTML = " ";
		return true;
	}
}


function lname_validation() {
	var lname = document.querySelector("#lastName");
	var lname_len = lname.value.length;
	if (lname_len == 0) {
		document.getElementById("lname error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("lname error").innerHTML = " ";
		return true;
	}
}


function ValidateEmail() {
	var email = document.querySelector("#email")
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(mailformat)) {
		document.getElementById("email error").innerHTML = " ";
		return true;
	}
	else {
		document.getElementById("email error").innerHTML = "You have entered an invalid email address!";
		return false;
	}
}

function valid_address(){
	var address_val = document.querySelector("#address");
	var address_len = address_val.value.length;
	if (address_len == 0) {
		document.getElementById("address error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("address error").innerHTML = " ";
		return true;
	}
}



function city_validation() {
	var city = document.querySelector("#inputCity");
	var city_len = city.value.length;
	if ( city_len == 0) {
		document.getElementById("city error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("lname error").innerHTML = " ";
		return true;
	}
}


function stateselect() {
	var state = document.querySelector("#inputState")
	if (state.value == "Default") {
		document.getElementById("state error").innerHTML = "select your state from the list";
		return false;
	}
	else {
		document.getElementById("state error").innerHTML = " ";
		return true;
	}
}



function zipcode_validation() {
	var zipcode = document.querySelector("#zipcode");
	var zipcode_len = zipcode.value.length;
	if (zipcode_len == 0) {
		document.getElementById("zipcode error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("zipcode error").innerHTML = " ";
		return true;
	}
}


function phone_validation() {
	var phone = document.querySelector("#telephone");
	var phone_len = phone.value.length;
	if (phone_len == 0) {
		document.getElementById("phone error").innerHTML = "Cannot be empty"; uid.focus();
		return false;
	}
	
	else {
		document.getElementById("phone error").innerHTML = " ";
		return true;
	}
}



//validate & nav to dispatch

function validate_dispatch(){
    var fname = document.getElementById("FirstName");	
    var lname = document.getElementById("lastName");	
    var email = document.getElementById("email");
    var address = document.getElementById("address");	
    var city = document.getElementById("inputCity");	
    var country = document.getElementById("inputcountry");	
    var state = document.getElementById("inputState");
    var zipcode = document.getElementById("zipcode");
    var phone = document.getElementById("telephone");


  //form value save to local storeage
  let formdetails = {
    "fname":fname.value,
    "lname":lname.value,
    "email_id":email.value,
    "address":address.value,
    "city":city.value,
    "country":country.value,
    "state":state.value,
    "zipcode":zipcode.value,
    "phoneno":phone.value,
}
var f_name = fname.value.length
var l_name = lname.value.length
var address_form = address.value.length
var tele_phone = phone.value.length

if(f_name,l_name,address_form,tele_phone != 0){
    localStorage.setItem("buyer's form details",JSON.stringify(formdetails ))
    window.location.href = "dispatch.html"
}
else{
    alert("Invalid form details")
    window.location.reload()
}

}

document.addEventListener("DOMContentLoaded", loadfun);

function loadfun() {
    loadcontent();
}

function loadcontent() {
    total = JSON.parse(localStorage.getItem("totalprice"))
    items = JSON.parse(localStorage.getItem("arryitems"))
	document.getElementById("total").innerHTML=total
	document.getElementById("Subtotal").innerHTML=total
	document.getElementById("totalitem").innerHTML=items

}
