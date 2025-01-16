import React from 'react'
import '../global.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex w-full p-3  justify-between sticky top-0 bg-white z-20'  >
                <span className='w-[25em] flex justify-between' > 
                    <h1 className='font-bold text-lg' >Ecommerce Application</h1>
                    <Link to={"/"} className='navbar-btn' >Home</Link>
                    <Link to={"/sell"} className='navbar-btn' >Sell</Link>
                </span>
                <span className='w-[16em] flex justify-between' >
                    <Link  to={"/api/auth/signin"} className='navbar-btn' >SignOut</Link>
                    <Link to={"/cart"} className='navbar-btn' >My Cart</Link>
                    <Link to={"/account"} className='navbar-btn' >Account</Link>
                </span>
            </div>
        </>
    )
}

export default Navbar