"use client"
import React from 'react'
import '../global.css'


const SignUpPage = () => {
  function handleFormDetails(formData: any) {
    console.log(formData)
  }
  return (
    <>
      <div className='w-screen flex justify-center items-center' >
        <span className='auth-container' >
          <h1 className='text-[3em] font-bold text-center' >SignUp</h1>
          <form action={handleFormDetails} >
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
          <button className='auth-external_button bg-gray-100 font-bold'>Github</button>
          <button className='auth-external_button bg-gray-100 font-bold'  >Google</button>
        </span>
      </div>
    </>
  )
}

export default SignUpPage