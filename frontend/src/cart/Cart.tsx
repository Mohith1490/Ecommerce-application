import CartItemsPage from '../components/CartItemsPage.tsx';
import { RootState } from '../redux/store.ts';
import React from 'react';
import { useSelector } from 'react-redux';
import '../global.css'

const Cart = () => {
  const selectedItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className='flex justify-between' > 
      <div>

        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (
            <CartItemsPage {...item} />
          ))
        ) : (
          <span className='font-extrabold text-[5rem] relative ml-[10rem]' >Your cart is empty</span>
        )}
      </div>
      <TotalItemPrice  />
    </div>
  );
};

export default Cart;

const TotalItemPrice = () => {
  
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const totalItem = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <div className='w-[20em] h-[20em] border-2 border-gray-400 rounded-3xl p-5 top-20 z-10 float-right sticky right-20' >
      <h1 className='font-semibold text-xl mt-6' >Total items: <h1 className='relative float-right' >{totalItem}</h1> </h1>
      <hr className='border' />
      <h1 className='font-semibold text-xl mt-10' >Shipping fee: <h1 className='relative float-right text-green-600' >Free</h1>  </h1>
      {/* <hr className='border' /> */}
      {/* <div className='grid grid-flow-col justify-between items-center mt-7 ' >
        <h1 className='font-semibold text-xl' >Coupons:</h1>
        <input type="text" className='auth-input !w-[10em] ' />
      </div> */}
      <hr className='border' />
      <div className='grid grid-flow-col justify-between items-center mt-7 ' >
        <h1 className='font-semibold text-xl' >Total Amount:</h1>
        <p className='font-semibold text-xl' >{totalPrice.toFixed(2)}</p>
      </div>
      <button className='auth-button !w-[17em] !mt-10 font-bold ml-2 bg-blue-400' >Proceed To Pay</button>
    </div>
  )
}