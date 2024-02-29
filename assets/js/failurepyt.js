const lasttext = document.querySelector(".lasttxt")
const lsttxt = document.querySelector(".lsttxt")

document.querySelector(".txtbtn").addEventListener("click",()=>{
   setTimeout(function(){
    lasttext.style.display = "block"
    lsttxt.style.display = "none"
   },2000)
})

function navtopty(){
    window.location.href="review.html"
}
function navtomainpage(){
    window.location.href="Mainpage.html"
}