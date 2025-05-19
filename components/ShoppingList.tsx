import React from 'react'
import { useState } from 'react'
interface ShopItem {
  name: string 
  price: number
}
const ShoppingList = () => {
    const [Item, setItem] = useState<ShopItem>({name: '', price: 0})
    const [ItemList, setItemList] = useState<ShopItem[]>([])
    console.log(Item); // will show cleared

  return (
    <div>
      {ItemList.map(({name, price}) => {
        return <div>
              <p>Name: {name}</p>
                <p>Price: {price}</p>
        </div>
       } )}
      <form action="submit" onSubmit={(e) => 
        {e.preventDefault()
          setItemList([...ItemList, Item])
          setItem({name: '', price: 0})
        }}>
           <input value={Item.name} type="text"  aria-placeholder='Enter Name' onChange={(e) => setItem({...Item, name: e.target.value})} />
            <input value={Item.price} type="number"  aria-placeholder='Enter price' onChange={(e) => setItem({...Item, price: parseFloat(e.target.value) || 0})} />
        <button type='submit'
        >Enter</button>
      </form>
      
    </div>
  )
}

export default ShoppingList