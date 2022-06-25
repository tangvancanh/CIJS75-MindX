import React, { useState } from 'react'

const array = [1, 2, 3, 4, 5, 6];

const Play = () => {
    const [check, setCheck] = useState(true)

    const Play = () => {
        setCheck(!check)
    }

    return (
        <>
            <button onClick={Play} style={{ height: "50px", width: "50px" }}>Click</button>
            {array.map((value, index) => (
                <div key={index} className={`square ${check == false && (value % 2 == 0 && 'circle')}`}></div>
            ))}
        </>
    )
}

export default Play