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
</div>
  )
}


export default App