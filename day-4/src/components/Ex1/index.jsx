import React, { useState } from 'react'

const array = [1, 2, 3, 4, 5, 6];

const Play = () => {

    return (
        <>
            {array.map((value, index) => (
                <div key={index} className={`square ${value % 2 == 0 && 'circle'}`}></div>
            ))}
        </>
    )
}

export default Play