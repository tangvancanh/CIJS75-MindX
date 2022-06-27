import React, { useState } from 'react'

const Ex1 = () => {

    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const Play = (e) => {
        e.preventDefault();
        setArray([...array, text]);
        setText("");
    }

    return (
        <>
            <form onSubmit={Play}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button>Next</button>
            </form>

            {array.map((value, index) => (
                <p>{value}</p>
            ))}
        </>
    )
}

export default Ex1