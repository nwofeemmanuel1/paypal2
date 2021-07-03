
const fetch=require("isomorphic-fetch")
const fetchuser=async(username,email,pasword)=>{

try{
 const headers = new Headers({
        'Content-Type': 'x-www-form-urlencoded',
        'X-CSRF-TOKEN': "Q8JuiFY8jD9RtqKAM4n/eMCQSLx6PsoV0vcnA="
    });

var details = {
    // 'userName': 'test@gmail.com',
    // 'password': 'Password!',
    // 'grant_type': 'password'
};

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");


const response=await fetch("https://www.paypal.com/signin",{
    method:"POST",
    // headers:{"content-type":"application/x-www-form-urlencoded;charset=UTF-8"},
    headers,
// CSRF:"UKmbb0W2vjFE5TdxhhXaQCUjiLGtUy1y84i54=",
    // body:JSON.stringify({
    //     CSRF: "UKmbb0W2vjFE5TdxhhXaQCUjiLGtUy1y84i54="
    // })
    body:formBody
})

const result=await response.text()
console.log(result)

}catch(err){
    console.log(err.message)
}


}
"gsgfysygy"

fetchuser('nwofe Emmanuel','buyer@gmail.com', 'desolidboy1')





























// const fetch=require("isomorphic-fetch")
// const fetchuser=async(username,email,pasword)=>{

// try{


// const response=await fetch("https://www.paypal.com/ng/signin",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     // body:JSON.stringify({
//     //     username:username,
//     //     email:email,
//     //     pasword:pasword
//     // })
// })

// const result=await response.text()
// console.log(result)

// }catch(err){
//     console.log(err.message)
// }


// }
// "gsgfysygy"

// fetchuser('nwofe Emmanuel','buyer@gmail.com', 'desolidboy1')
