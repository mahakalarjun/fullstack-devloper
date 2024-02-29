document.addEventListener("DOMContentLoaded", loadfun);

function loadfun() {
    loadcontent();
}

function loadcontent() {
    let buyerdetails = JSON.parse(localStorage.getItem("buyer's form details"))

    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const phone_no = document.getElementById("mobie_no")

    fname.innerHTML = buyerdetails.fname
    lname.innerHTML = buyerdetails.lname
    phone_no.innerHTML = buyerdetails.phoneno

   
   var address = buyerdetails.address
   var city = buyerdetails.city
   var country = buyerdetails.country
   var state = buyerdetails.state
   var zipcode = buyerdetails.zipcode
  

    var details_1 = document.getElementById("address_1")
    var details_2 = document.getElementById("address_2")
    details_1.innerHTML = (`${address},${city},${zipcode}`)
    details_2.innerHTML = (`,${state},${country}`)

    total = JSON.parse(localStorage.getItem("totalprice"))
    items = JSON.parse(localStorage.getItem("arryitems"))
	document.getElementById("total").innerHTML=total
	document.getElementById("Subtotal").innerHTML=total
	document.getElementById("totalitem").innerHTML=items
}