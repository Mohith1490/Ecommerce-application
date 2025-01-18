"use client"
import React from 'react'
import '../global.css'
import { GoogleLogin } from '@react-oauth/google'

const SignInPage = () => {
    function handleFormDetails(formData: any) {
        console.log(formData.get('email'))
    }
    return (
        <>
            <div className='w-screen flex justify-center items-center' >
                <span className='auth-container' >
                    <h1 className='text-[3em] font-bold text-center' >Signin</h1>
                    <form action={handleFormDetails} >
                        <label htmlFor="input-email" className='label' >Email</label>
                        <input type="email" name='email' placeholder='Email' id='input-email' className='auth-input' />
                        <label htmlFor="password" className='label' >Password</label>
                        <input type="password" name='password' placeholder='password' id='password' className='auth-input' />
                        <button type="submit" className='auth-button bg-black text-white font-bold' >Submit</button>
                    </form>
                    <div className='flex justify-between items-center' >
                        <hr className='line' />
                        <p>or</p>
                        <hr className='line' />
                    </div>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                    />
                </span>
            </div>
        </>
    )
}

export default SignInPage