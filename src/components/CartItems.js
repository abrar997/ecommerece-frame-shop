import React, { useState } from "react";


const sytyle = {
  backgroundColor: "orange",
  color: "white",
  borderRadius: "40px",
  padding: "5px",
  fontSize: "20px",
  border: "none",
  position:"absolute",
  right:"0",
  bottom:"0"
};


const CartItems = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
  return (
    <div className="card ">
      <button
        style={{backgroundColor:"rgba(0, 0, 0, 0.664)",color: "white",borderRadius: "30px",padding: "10px",fontSize: "20px",border: "none",position: "absolute",right: 0,top: 0,}}onClick={() => handleRemoveFromCart(item.id)} >X</button> 
        <img src={item.image.url} />
      <div>
        
        <h3> {item.name} </h3>
     
     
     <p className="mt-2" style={{ fontWeight: "bold" }}>
          {item.price.formatted_with_symbol}
        </p>
      </div>
      <div style={{display:"flex",flexFlow:"row"}}> 
        <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity-1)}>-</button>
        <h4>{item.quantity} </h4>

       <button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity+1)}>+</button>


      </div>

      <div>
           {/* i have problem here not work yet */}
        {/* <button style={sytyle} onClick={() => handleUpdateCartQty(item.id, item.quantity)}> update</button> */}
      </div>
    </div>
  );
};

export default CartItems;
