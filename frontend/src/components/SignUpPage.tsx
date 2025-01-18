"use client"
import React, { useEffect, useState } from 'react'
import '../global.css'
import { GoogleLogin } from '@react-oauth/google'


const SignUpPage = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  useEffect(()=>{
    
  },[formData])
  function googleAunthication(credential:any){
    localStorage.setItem("googlecred",credential)
  }
  return (
    <>
      <div className='w-screen flex justify-center items-center' >
        <span className='auth-container' >
          <h1 className='text-[3em] font-bold text-center' >SignUp</h1>
          <form>
            <label htmlFor="input-name" className='label' >Name</label>
            <input value={formData.name} onChange={handleChange} type="text" name='name' placeholder='Name' id='input-name' className='auth-input' required />
            <label htmlFor="input-email" className='label' >Email</label>
            <input value={formData.email} onChange={handleChange} type="email" name='email' placeholder='Email' id='input-email' className='auth-input' required />
            <label htmlFor="password" className='label' >Password</label>
            <input value={formData.password} onChange={handleChange} type="password" name='password' placeholder='password' id='password' className='auth-input' required />
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