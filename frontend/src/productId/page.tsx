import React from 'react'
import '../global.css'

const page = ({ params }: { params: { productId: string } }) => {
    return (
        <div className='w-screen flex justify-center items-center ' >
            <div className='w-[98%] h-[90vh] flex border-2 border-gray-400 rounded-3xl' >
                <div className='w-[20rem] h-[32rem]  p-7 relative m-4 border-2 border-gray-500 rounded-2xl ' >
                    <div className='w-[16rem] h-[14rem] border-2 border-gray-400 rounded-3xl drop-shadow-2xl' >
                        Image
                    </div>
                </div>
                <span className='relative mt-5' >
                    <h1 className=' relative font-extrabold text-3xl'>Title</h1>
                    <span className='relative font-medium text-xl ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo debitis in impedit? Incidunt cum reiciendis delectus fugit tempore perspiciatis facere asperiores impedit.
                    </span>
                    <button className='auth-button font-bold bg-blue-600 hover:bg-blue-500' >Checkout</button>
                </span>
            </div>
        </div>
    )
}

export default page