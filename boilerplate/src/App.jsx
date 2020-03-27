import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
    </div>
  );
}

export default App;
