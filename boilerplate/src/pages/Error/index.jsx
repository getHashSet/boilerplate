import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'; // *required* to use Redux and Store.
import { setHeader } from '../../actions'; // Load up actions that are used on this page.

export default function Error(props) {
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
        dispatch(setHeader("Error Page"));
    });

    return (
        <div>
            <h1>{header}</h1>
            <h2>404 Error Page not found.</h2>
        </div>
    )
}