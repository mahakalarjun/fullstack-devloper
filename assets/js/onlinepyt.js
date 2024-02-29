












document.querySelector(".success").addEventListener("click", success)
document.querySelector(".failure").addEventListener("click", failure)

//card success
function success() {
    const cardnum = document.querySelector(".cardbox")
    const cardmonth = document.querySelector(".monthbox")
    const cardyear = document.querySelector(".yearbox")
    const cardcvv = document.querySelector(".cvvbox")
    //////////////////
    let cardstr = "4434 5674 3498 9576"
    cardnum.value = cardstr

    let monthstr = 10
    cardmonth.value = monthstr

    let yearstr = 2027
    cardyear.value = yearstr

    let cvvstr = 803
    cardcvv.value = cvvstr
    //////////////////
    let carddetails = {
        "card-num": cardnum.value,
        "card-month": cardmonth.value,
        "card-year": cardyear.value,
        "card-cvv": cardcvv.value
    }

    localStorage.setItem("card-details", JSON.stringify(carddetails))
}

//card failure

function failure() {
    const cardnum = document.querySelector(".cardbox")
    const cardmonth = document.querySelector(".monthbox")
    const cardyear = document.querySelector(".yearbox")
    const cardcvv = document.querySelector(".cvvbox")
    //////////////////
    let cardstr = "7685 9484 3938 8483"
    cardnum.value = cardstr

    let monthstr = 10
    cardmonth.value = monthstr

    let yearstr = 2027
    cardyear.value = yearstr

    let cvvstr = 803
    cardcvv.value = cvvstr
    //////////////////
    let carddetails = {
        "card-num": cardnum.value,
        "card-month": cardmonth.value,
        "card-year": cardyear.value,
        "card-cvv": cardcvv.value
    }

    localStorage.setItem("failure-card-details", JSON.stringify(carddetails))
}



function card_num_validation() {
    var card_num = document.querySelector("#card_numb");
    var card_numb = card_num.value.length;
    if (card_numb == 0) {
        document.getElementById("card_error").innerHTML = "invalid card number";
        return false;
    }

    else {
        document.getElementById("card_error").innerHTML = " ";
        return true;
    }
}
function cvv_validation() {
    var cvv_num = document.querySelector("#cvv_numb");
    var cvv_numb = cvv_num.value.length;
    if (cvv_numb == 0) {
        document.getElementById("cvv_error").innerHTML = "invalid cvv";
        return false;
    }

    else {
        document.getElementById("cvv_error").innerHTML = " ";
        return true;
    }
}

function monthselect() {
    var month = document.querySelector("#card_month")
    if (month.value == "Default") {
        document.getElementById("month_error").innerHTML = "invalid month";
        return false;
    }
    else {
        document.getElementById("month_error").innerHTML = " ";
        return true;
    }
}
function yearselect() {
    var year = document.querySelector("#card_year")
    if (year.value == "Default") {
        document.getElementById("year_error").innerHTML = "invalid year";
        return false;
    }
    else {
        document.getElementById("year_error").innerHTML = " ";
        return true;
    }
}

//card validation
function validate() {
    card_number = document.getElementById("card_numb").value

    let cardstr = "4434 5674 3498 9576"
    let cardstr_2 = "7685 9484 3938 8483"
    if (card_number == cardstr) {
      setInterval(function(){
        window.location.href="succespyt.html"
      },2000)
    }
    else if (card_number==cardstr_2){
        setInterval(function(){
            window.location.href="pytfailure.html"
          },2000)
    }
    else {
      alert("invalid details")
    }
}

document.addEventListener("DOMContentLoaded", loadfun);

function loadfun() {
    loadcontent();
}

function loadcontent() {
   
    
    total = JSON.parse(localStorage.getItem("totalprice"))
	document.getElementById("cardamt").innerHTML=total
}