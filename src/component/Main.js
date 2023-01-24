import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart, emptyCart } from '../redux/Action/action'

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
        <button className="btn btn-primary" onClick={() => dispatch(removeToCart(product))} >Remove from cart</button>
        <button className="btn" onClick={() => dispatch(emptyCart(product))}>Empty cart</button>
    </div>
  )
}

export default Main