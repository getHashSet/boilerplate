import React from 'react';

export default function TypeScrptDemo() {
    /////////////////////////
    // return
    /////////////////////////


    return (
        <div>
            <input type="number" id="num1" placeholder="Number 1" />
            <input type="number" id="num2" placeholder="Number 2" />
            <button onClick={addTogether}>Add!</button>
        </div>
    )
};

    /////////////////////////
    // hooks
    /////////////////////////

    /////////////////////////
    // functions
    /////////////////////////

    const addTogether = () => {

        const input1 = document.getElementById("num1").value;
        const input2 = document.getElementById("num2").value;

        // return value
        console.log(input1 + input2);
    };

    /////////////////////////
    // Styled Components
    /////////////////////////