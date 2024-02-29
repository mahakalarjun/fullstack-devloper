function emailvalid() {
    useremail = document.getElementById("user_email")
    let mail_len = useremail.value.length
    userpass = document.getElementById("password")
    let pass_len = userpass.value.length
    if (mail_len < 10) {
        alert("Invalid Sign Up Details")
    }

    else if (pass_len<8){
        alert("Password cannot be less than 8 characters")
    }
    else {
        localStorage.setItem("useremail_id", JSON.stringify(useremail.value))
        window.location.href = "otpverify.html"
    }
}