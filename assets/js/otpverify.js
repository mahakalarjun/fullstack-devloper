document.addEventListener("DOMContentLoaded", loadfun)

function loadfun() {
    loadcontent()
}

function loadcontent() {
    let mailbox = document.getElementById("email_val")
    useremail = JSON.parse(localStorage.getItem("useremail_id"))
    mailbox.value = useremail

    //otp time generate
    var firstNumber = 60;

    var interval = setInterval(function () {
        document.querySelector(".sec").innerHTML = firstNumber + "s"

        if (firstNumber === 0) {
            clearInterval(interval);
            document.querySelector(".otpre").style.display = "none"
            document.querySelector(".reotp").style.display = "block"
            
        }
    

        firstNumber--;
    }, 1000);
};

document.getElementById("email_change").addEventListener("click", () => {
    window.location.href = "signup.html"
})

function validate_otp() {
    email = document.getElementById("emailbox")
    email_len = email.value.length
    if (email_len == 0) {
        document.getElementById("error_msg").innerHTML = "Please enter a valid OTP"
    }
   
}

