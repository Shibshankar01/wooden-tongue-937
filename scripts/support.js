import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

document.querySelector("#navbar").innerHTML=navbar();
document.querySelector(".footer-container").innerHTML=footer();

let input = document.querySelector("input");

input.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13 && (e.target.value === "time tracking")){
       //console.log(e.target.value)
       window.location.href="./TimeTracking.html"
    }
    else if(e.keyCode === 13 && (e.target.value === "project tracking")){
      window.location.href="./projectTracking.html"
    }
 })