document.addEventListener("DOMContentLoaded",()=>{

    document.getElementById("email").onkeyup=()=> {
    if(document.querySelector(".showError"))return document.querySelector(".showError").className="hideone"
}
    document.getElementById("first-name").onkeyup=()=> {
    if(document.querySelector(".showError"))return document.querySelector(".showError").className="hidetwo"
}

    document.getElementById("last-name").onkeyup=()=> {
    if(document.querySelector(".showError"))return document.querySelector(".showError").className="hidethree"
}

    document.getElementById("password").onkeyup=()=> {
    if(document.querySelector(".showError"))return document.querySelector(".showError").className="hidefour"
}

    document.getElementById("checkpassword").onkeyup=()=> {
    if(document.getElementById("password").value == document.getElementById("checkpassword").value )  return document.querySelector(".showError").className="hidefive" 
}


    document.getElementById("btnLogin").onclick=()=>{
      if(!document.getElementById("email").value) return document.querySelector(".hideone").className="showError"
        if(!document.getElementById("first-name").value) return document.querySelector(".hidetwo").className="showError"
     if(!document.getElementById("last-name").value) return document.querySelector(".hidethree").className="showError"

    
     if(!document.getElementById("password").value) return document.querySelector(".hidefour").className="showError"

    //   if(document.getElementById("password").value.length < 8)return document.querySelector(".hidesix").className="showError2"
 
// return alert("password must be greater than 8")
     if(document.getElementById("password").value !== document.getElementById("checkpassword").value )  return document.querySelector(".hidefive").className="showError"

    //  alert("null")
    //  checkpassword
    }




})