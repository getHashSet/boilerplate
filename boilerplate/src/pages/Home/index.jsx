import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // To use Redux and Store.
import { increment, decrement } from '../../actions';
import PropTypes from 'prop-types';

export default function Home(props) {
    //////////////////////////////////
    // stage variables from the store
    //////////////////////////////////
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerTag);

    return (
        <div>
            <h1>{header}</h1>
            <h2>{counter}</h2>
            <button onClick={() => dispatch(increment(3))}>+</button>
            <button onClick={() => dispatch(decrement(5))}>-</button>
        </div>
    )
}

