"use client"
import React from 'react'
import '../global.css'
import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from "react-router-dom";


const SignUpPage = () => {
  const navigate = useNavigate()
  const sendData = async (formData: FormData) => {
    const [name, email, password] = formData.values()
    try {
      const result = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("token", res.token)
          navigate("/")
          window.location.reload()
        })
    } catch (err) {
      console.log("error occured ", err)
    }
  }
  function googleAunthication(credential: any) {
    localStorage.setItem("googlecred", credential)
  }
  return (
    <>
      <div className='w-screen flex justify-center items-center' >
        <span className='auth-container' >
          <h1 className='text-[3em] font-bold text-center' >SignUp</h1>
          <form action={sendData} >
            <label htmlFor="input-name" className='label' >Name</label>
            <input type="text" name='name' placeholder='Name' id='input-name' className='auth-input' required />
            <label htmlFor="input-email" className='label' >Email</label>
            <input type="email" name='email' placeholder='Email' id='input-email' className='auth-input' required />
            <label htmlFor="password" className='label' >Password</label>
            <input type="password" name='password' placeholder='password' id='password' className='auth-input' required />
            <button type="submit" className='auth-button bg-black text-white font-bold' >Submit</button>
          </form>
          <div className='flex justify-between items-center' >
            <hr className='line' />
            <p>or</p>
            <hr className='line' />
          </div>
          <GoogleLogin
            onSuccess={credentialResponse => {
              googleAunthication(credentialResponse?.credential)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </span>
      </div>
    </>
  )
}

export default SignUpPage