import React from 'react'
import '../global.css'
import { Link } from 'react-router-dom'
import SignOut from '../lib/signout.ts'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store.ts'

const Navbar = () => {
    const totalItem = useSelector((state: RootState) => state.cart.totalItems);
    return (
        <>
            <div className='flex w-full p-3  justify-between sticky top-0 bg-white z-20'  >
                <span className='w-[25em] flex justify-between' >
                    <h1 className='font-bold text-lg' >Ecommerce Application</h1>
                    <Link to={"/"} className='navbar-btn' >Home</Link>
                    {
                        localStorage.getItem("token") ? <Link to={"/sell"} className='navbar-btn' >Sell</Link>
                            : <p></p>
                    }
                </span>
                <span className='w-[16em] flex justify-between' >
                    {
                        localStorage.getItem("token") ?
                            <button  onClick={SignOut} className='navbar-btn !bg-red-400'  >SignOut</button>
                            : <Link to={"/api/auth/signup"} className='navbar-btn ' >SignUp</Link>
                    }
                    <Link to={"/cart"} className='navbar-btn' >My Cart {totalItem > 0 ? <span className='w-6 h-6 ml-1 flex justify-center bg-red-400 items-center rounded-full' >{totalItem}</span> : ""}</Link>
                    <Link to={"/account"} className='navbar-btn' >Account</Link>
                </span>
            </div>
        </>
    )
}

export default Navbar