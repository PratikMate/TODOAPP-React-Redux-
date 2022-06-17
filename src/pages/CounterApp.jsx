import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { counterDec, counterInc } from '../store/counter/counter.action';

const CounterApp = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  
  return (
    <div>
      <h1>CounterApp : {count}</h1>
      <button onClick={() => dispatch(counterDec())}>-</button>
      <button onClick={() => dispatch(counterInc())}>+</button>
    </div>
  )
}

export default CounterApp