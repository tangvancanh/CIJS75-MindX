import React, { useState } from 'react'

const Click = () => {
    const [number, setNumber] = useState(false);

    const Play = () => {
        setNumber(!number);
    }

    return (
        <>
            <button onClick={Play} style={{ height: "50px", width: "50px" }}>Next</button>
            <div className={`${number == false ? 'square' : 'circle'}`}></div>
        </>
    );
}

export default Click