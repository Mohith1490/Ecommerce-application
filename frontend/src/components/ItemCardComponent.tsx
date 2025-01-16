import React, {  useState } from 'react'
import '../global.css'
import { addToCart } from '../redux/slice/cartSlice.ts'
import { useAppDispatch } from '../redux/hooks.ts'
import {Link} from 'react-router-dom'

 type cartDisplayLayout = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
}


const ItemCardComponent = ({id, title, price, description, image }: cartDisplayLayout) => {

  const dispatch = useAppDispatch();
  const [clicked,setClicked] = useState(false);
  function addToCartfunction(){
    dispatch(addToCart({id, title, price, description, image,quantity:1}))
    setClicked(!clicked)
}
  return (
    <>
      <div className='card' key={id} >
        <Link to={`/details/${id}`} >
          <img src={`${image}`} alt='hello' className='w-[14em] h-[10em] border-2 border-black rounded-xl' />
          <h4 className='font-bold overflow-hidden' >{title}</h4>
          <p className='w-[14rem] h-7  overflow-y-hidden font-medium' >{description}</p>
          <span className='font-bold text-2xl ' >${price.toFixed(2)}<sub className='font-bold text-sm' ><s>${(price * 1.5).toFixed(2)}</s></sub> </span>
        </Link>
        <button onClick={addToCartfunction}  className='w-[14rem] h-10 mb-3 border-2 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium z-10'>
            {clicked ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </>
  )
}

export default ItemCardComponent