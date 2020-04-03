import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To use Redux and Store.
import {setHeader, increment, decrement } from '../../actions';
import TypeScriptDemo from '../../_components/TypeScriptDemo';
import Header from '../../_components/Header';


export default function Home(props) {
    //////////////////////////////////
    // stage variables from the store
    //////////////////////////////////
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    //////////////////////////////////
    // Hooks
    //////////////////////////////////
    
    useEffect(() => {
        dispatch(setHeader("Home Page")); 
    });

    return (
        <div>
            <Header />
            <h2>{counter}</h2>
            <button onClick={() => dispatch(increment(3))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
            <TypeScriptDemo />
        </div>
    )
};