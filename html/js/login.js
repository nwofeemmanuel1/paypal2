let numberOfRequest=0


document.querySelector("#btnLogin").onclick=()=>{
    document.querySelector("#invalidCredential").innerHTML=""
const email=document.getElementById("email").value
const password=document.getElementById("password").value
if(email && password){
   event.preventDefault()
   document.querySelector("#btnLogin").innerHTML="Loging..."
   setTimeout(()=>{
      document.querySelector("#btnLogin").innerHTML="Log In"
      document.querySelector("#invalidCredential").innerHTML="Invalid email or Password"
     document.getElementById("email").value=""
     document.getElementById("password").value=""
   },1000)
  
}
}