import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To use Redux and Store.
import {setHeader, increment, decrement } from '../../actions';

export default function Home(props) {
    //////////////////////////////////
    // stage variables from the store
    //////////////////////////////////
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerTag);

    //////////////////////////////////
    // Hooks
    //////////////////////////////////
    useEffect(() => {
        dispatch(setHeader("Home Page"));
    })

    return (
        <div>
            <h1>{header}</h1>
            <h2>{counter}</h2>
            <button onClick={() => dispatch(increment(3))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
        </div>
    )
}

