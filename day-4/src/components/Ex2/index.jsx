import React, { useState } from 'react'

const array = ["red", "yellow", "green", "blue", "orange", "pink", "gray"];

const ChangeColor = () => {
    const [color, setColor] = useState(0);

    const play = () => {
        setColor(color == 6 ? 0 : color + 1);
    }

    return (
        <>
            <button onClick={play} style={{ height: "50px", width: "50px" }}>Next</button>
            {array.map((value, index) => (
                <div key={index} className="circle" style={{ background: index == color ? value : "none" }}></div>
            ))}
        </>
    );
}

export default ChangeColor