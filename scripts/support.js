let input = document.querySelector("input");

input.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13 && (e.target.value === "time tracking")){
       //console.log(e.target.value)
       window.location.href="./timeTracking.html"
    }
    else if(e.keyCode === 13 && (e.target.value === "project tracking")){
      window.location.href="./projectTracking.html"
    }
 })