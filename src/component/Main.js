import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action/action'

const Main = () => {
    const dispatch = useDispatch();

    const product = { 
        name: 'iphone',
        id: 1,
        price: 12334,
        color: "black"
    }

  return (
    <div>
        <button className="btn btn-primary"onClick={() => dispatch(addToCart(product))} >Add to Cart</button>
    </div>
  )
}

export default Main