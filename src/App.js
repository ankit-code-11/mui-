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
    </div>
  );
}

export default App;
