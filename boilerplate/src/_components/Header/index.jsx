import React from 'react';
import { useSelector } from 'react-redux'; // To use Redux and Store.

export default function Header() {
    //////////////////////////////////
    // variables from the store
    //////////////////////////////////
    const header = useSelector(state => state.headerTag);

    return (
        <div>
            <h1>{header}</h1>
        </div>
    )
}
