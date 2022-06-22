import React from 'react'

const Product = ({product}) => {
  return (
    <div class="product">
        <h3>{product.id}</h3>
        <p>Name: {product.title}</p>
        <p>Category: {product.category}</p>
        <p>Description : {product.description }</p>
        <img src={product.image} alt="img" style={{width : "100px"}} />
        <p>Price: {product.price}</p>
    </div>
  )
}

export default Product