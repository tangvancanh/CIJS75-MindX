import React from 'react'
import { useState, useEffect } from 'react';


const Ex1 = () => {
    const [product, setProduct] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProduct(data);
    }

    return (
        <>
            <button onClick={fetchData}>Call api Ex1</button>
            {product && product.map((product, index) => (
                <div key={index}>
                    <b>{product.id + ' - '}</b>
                    <span>{product.title}</span>
                </div>
            ))}
        </>
    )
}

export default Ex1