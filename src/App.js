<<<<<<< HEAD
import React from 'react';
import HomeContainer from './container/HomeContainer'
import Main from './component/Main';
import './App.css'
import { useSelector } from 'react-redux'

const App = () => {

  const data = useSelector(state => state.cartData)
  console.log(data)
  return (
    <div>
      <HomeContainer  />
      <Main />
=======
import logo from './logo.svg';
import './App.css';
import { addToCart } from './redux/action';
import { useDispatch } from 'react-redux';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const product = {
    name: 'Apple',
    price: 100,
  };
  return (
    <div className="App" >
      <Header />
      <button onClick={() => dispatch(addToCart(product))} >
        Add to Cart
      </button>
>>>>>>> 5c8d3c3d1c5689989a8cb8ae325d5d76fa6395ba
    </div>
  )
}

export default App