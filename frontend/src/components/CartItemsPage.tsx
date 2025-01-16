"use client"
import React, { useState } from 'react'
import '../global.css'
import { addToCart, cartLayout, deleteItem, removeFromCart } from '../redux/slice/cartSlice.ts'
import { useDispatch } from 'react-redux'



const CartItemsPage = (items: cartLayout) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    function addMore() {
        setQuantity(quantity + 1)
        dispatch(addToCart({ ...items }))
    }
    function removeElement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            dispatch(removeFromCart(items.id))
        }
    }
    return (
        <>
            <div >
                <div className='w-[90%] h-[15em] border-2 border-gray-200 rounded-2xl flex mt-5 ml-7 px-5' >

                    <img src={items.image} alt={items.title} className='w-[15em] h-[12em] border-2 border-gray-400 relative my-6 mr-6 rounded-2xl' />

                    <span className='relative mt-5 w-[65%]' >
                        <h1 className=' relative font-extrabold text-xl'>{items.title}</h1>
                        <span className='relative font-medium' >
                            {items.description}
                        </span><br />
                        <div className='w-[13em] h-[3em]  flex justify-between items-center' >
                            <button className='quantity-btn' onClick={addMore} >+</button>
                            <h4 className='font-bold text-lg' >{quantity > 0 ? quantity : 1}</h4>
                            <button className='quantity-btn' onClick={removeElement}  >-</button>
                            <h1 className='font-bold text-lg' >Price: {quantity > 0 ? (items.price * quantity).toFixed(2) : items.price}</h1>
                        </div>
                        <button onClick={()=>dispatch(deleteItem(items.id))} className='auth-button !w-[19em] font-bold bg-blue-600 hover:bg-blue-500'>Remove from cart</button>
                        {/* <div className='flex justify-between' >
                            <button className='auth-button !w-[19em] font-bold bg-blue-600 hover:bg-blue-500' >Checkout</button>
                        </div> */}
                    </span>
                </div>
            </div>
        </>
    )
}

export default CartItemsPage