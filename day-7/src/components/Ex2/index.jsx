import React from 'react'
import { useState, useEffect } from 'react';


const Ex2 = () => {
    const [product, setProduct] = useState(null);

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await response.json();
        setProduct(data);
    }

    return (
        <div>
            <button onClick={fetchData}>Call api Ex2</button>
            {product && product.map((product, index) => (
                <div key={index}>
                    <b>{product.id <= 10 && product.id + ' - '}</b>
                    <span>{product.id <= 10 && product.title}</span>
                </div>
            ))}
        </div>
    )
}

export default Ex2