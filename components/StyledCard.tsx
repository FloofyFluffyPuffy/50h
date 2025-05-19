import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
const StyledCard = () => {
    const style =  {
        color: 'blue'
    }
  return (
    <div style={{padding: '20px', borderRadius: '10px' , color: 'darkblue', backgroundColor: 'red'}}>
        <h1>MY STYLED CARD</h1>
        <CiShoppingCart color='blue' size={70}/>
        <p style={style}>BLA BLA BLA</p>
    </div>
  )
}
export default StyledCard