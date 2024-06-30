//This is basically what we did in lab
function toggleStyleSheet(){
   

    const element = document.getElementById("mainStyleSheet");

    const currentStyleSheet = element.getAttribute("href");

    let newStyleSheet;
    if (currentStyleSheet.includes("style.css")) {
        newStyleSheet = "style2.css"; 
    } else {
        newStyleSheet = "style.css";
    }

    element.setAttribute("href", newStyleSheet);

    console.log(newStyleSheet);

    localStorage.setItem("currentStyleSheet", newStyleSheet);
}


window.onload = function(){

    const element3 = localStorage.getItem("currentStyleSheet");
   
    const element4 = document.getElementById("mainStyleSheet");
  
    element4.setAttribute("href", element3);  
    
}




