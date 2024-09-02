import { useState } from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, mulitply } from './app/counter/counterSlice'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state) => state.counterKey.value) //! for accessing value 

  const dispatch = useDispatch() //! this is hook so don't use it directly

  return (
    <>
    <Navbar />
      <div >
        <button
          onClick={() => dispatch(decrement())}
        >-</button>
        <h1>
          current count is : {count}
        </h1>
        <button
          onClick={() => dispatch(increment())}
        >+</button>
        <button
          onClick={() => dispatch(mulitply())}
        >*</button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
        >amount increament</button>
      </div>
    </>
  )
}

export default App