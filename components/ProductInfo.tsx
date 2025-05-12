import React from 'react'
const product = {
    name: "laptop", price: "$1200", availability: "in stock"
}
const ProductInfo = () => {
  return (
    <div>
        
        <li>{[product.name]}</li>
        <li>{[product.price]}</li>
        <li>{[product.availability]}</li>
        
    </div>
  )
}

export default ProductInfo