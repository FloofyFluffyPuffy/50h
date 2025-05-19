import React, { useState } from 'react'
const ShoppingListNew = () => {
    const [items, setItems] = useState<{ name: string; quantity: number }[]>([])
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !quantity) return;
        const newItem = {
              name, quantity: parseInt(quantity)
      }
        setItems((prevItems) => [...prevItems, newItem])
        setName('')
        setQuantity('')
    }
  return (
    <div>ShoppingListNew
        <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='New Item' 
                value={name} onChange={(e) => setName(e.target.value)} />
   
                <input type="number"
                placeholder='Quantity' 
                value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button type='submit'>Add Item</button>
        </form> 
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.name} - Quantity {item.quantity}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingListNew