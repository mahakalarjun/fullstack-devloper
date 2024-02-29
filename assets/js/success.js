document.addEventListener("DOMContentLoaded", loadfun);

function loadfun() {
    loadcontent();
}

function loadcontent(){

   // const totalamt = document.querySelector(".camt")
    const randomnumber = document.querySelector(".randomnumber")

    // let totalamount = JSON.parse(localStorage.getItem("totalprice"))

    // totalamt.innerHTML = totalamount

    var randomnum = Math.floor(Math.random()*44444)+40000
    randomnumber.innerHTML = randomnum


     
    
    total = JSON.parse(localStorage.getItem("totalprice"))
	document.getElementById("billamt").innerHTML=total
}
