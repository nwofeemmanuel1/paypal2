

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const registerUser=async(phone,email,firstName,lastName,password,confirmPassword)=>{
const response=await fetch("http://localhost:3000/signup",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
     phone,email,firstName,lastName,password,confirmPassword
    })
})
const result=await response.json()
console.log(result)

}

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
     const phoneNumber=getCookie("phone")
     const email=document.getElementById("email").value
   const  firstName= document.getElementById("first-name").value
   const lastName=document.getElementById("last-name").value
   const password=document.getElementById("password").value
registerUser(phoneNumber,email,firstName,lastName,password)
    //  alert("null")
    //  checkpassword
    }




})