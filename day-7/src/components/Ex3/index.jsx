import React from 'react'
import { useState, useEffect } from 'react';


const Ex3 = () => {
    const [product, setProduct] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const data = await response.json();
        setProduct(data);
    }

    return (
        <>
            <button onClick={fetchData}>Call api Ex3</button>
            {product && product.map((product, index) => (
                <div key={index}>
                    <b>{product.id <= 10 && product.id + ` - `}</b>
                    <span>{product.id <= 10 && product.title}</span>
                </div>
            ))}
        </>
    )
}

export default Ex3