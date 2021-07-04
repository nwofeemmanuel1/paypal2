
const loginUser=async(email,password)=>{
const response=await fetch("http://localhost:3000/login",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        email,
        password
    })
})
const result=await response.json()
console.log(result)

}



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
      document.querySelector("#invalidCredential").innerHTML="Something went Wrong try again"
     document.getElementById("email").value=""
     document.getElementById("password").value=""
   },1000)


  
}
}