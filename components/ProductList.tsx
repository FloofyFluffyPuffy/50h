import React from 'react'

const ProductList = () => {
    const product = [
        {id:1, name:"Salt", price:"$7"},
        {id:2, name:"Sugar", price:"$5.7"},
        {id:3, name:"Air", price:"$17"}
    ]
  return (
    <div>
        {product.map(({id, name, price}) => (
            <div key="id">
                <p>product: {name}</p>
                <p>price: {price}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList