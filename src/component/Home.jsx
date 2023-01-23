import React from "react";
import { addToCart } from "../services/Action/action";
import { useDispatch } from "react-redux";
const Home = () => {

    const dispatch = useDispatch()

  return (
    <div>
        <div>

        <img style={{
            position: "absolute",
            right: "1%",
            top:"1%",
            width: "10%"
        }} src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-260nw-731433349.jpg" alt="cart" />
        </div>
      <h1>Home</h1>
      <div>
        <div className="img-wrapper item">
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-unselect-gallery-2-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663790290203" style={{width: "40%"}} alt='phone' />
            <div>
                <span>Iphone 14</span>
            </div>
            <div>
                <button onClick={() => dispatch(addToCart({type:'Add'}))} style={{}} >Add to cart</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
