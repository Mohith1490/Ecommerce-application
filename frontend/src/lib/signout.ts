export default function SignOut(){
    localStorage.clear()
    window.location.reload()
}

export async function CheckoutVerification(){
   const token = localStorage.getItem("token");
   if(!token){
   return window.location.href = "/api/auth/signup"
   }
   const isUser = await fetch("http://localhost:3001/verify",{
    method: "POST",
        headers: {
          "Authorization": "application/json",
        },
    body: JSON.stringify({token}),
   })
   .then((res)=> res.json())
   if(!isUser){
    window.location.href = "/api/auth/signup"
   }
}