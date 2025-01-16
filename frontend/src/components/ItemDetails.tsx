import React from 'react'
import '../global.css'
import { cartLayout } from '../redux/slice/cartSlice'
import { useParams } from 'react-router-dom'
import { products } from '../projects';

const ItemDetails = (items:cartLayout) => {
    const {id} = useParams();
    const it = parseInt(id!);
    const details = products.filter((item) => item.id === it)[0]

    return (
        <div className='w-screen flex justify-center items-center ' >
            <div className='w-[98%] h-[90vh] flex border-2 border-gray-400 rounded-3xl' >
                <div className='w-[20rem] h-[32rem]  p-7 relative m-4 border-2 border-gray-500 rounded-2xl ' >
                    <img src={`${details.image}`} alt={`${details.title}`} className='w-[16rem] h-[14rem] border-2 border-gray-400 rounded-3xl drop-shadow-2xl' />
                </div>
                <span className='relative mt-5' >
                    <h1 className=' relative font-extrabold text-3xl'>{details.title}</h1>
                    <span className='relative font-medium text-xl ' >
                        {details.description}
                    </span>
                    <button className='auth-button font-bold bg-blue-600 hover:bg-blue-500' >Checkout</button>
                </span>
            </div>
        </div>
    )
}

export default ItemDetails