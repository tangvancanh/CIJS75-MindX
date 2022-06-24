import React, { useState } from 'react'

const Click = () => {
    const [number, setNumber] = useState(1);

    const Play = () => {
        setNumber(number + 1);
    }

    return (
        <>
            <button onClick={Play} style={{ height: "50px", width: "50px" }}>Next</button>
            <div className={`square ${number % 2 == 0 && 'circle'}`}></div>
        </>
    );
}

export default Click