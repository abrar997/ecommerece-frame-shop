import React, { useState } from "react";

const sytyle = {
  backgroundColor: "orange",
  color: "white",
  borderRadius: "40px",
  padding: "5px",
  fontSize: "20px",
  border: "none",
  position: "absolute",
  right: "0",
  bottom: "0",
};
const btns = {
  borderRadius: "0px",
  backgroundColor: "orange",
  color: "white",
  border: "none",
  padding: "8px",
  fontSize: "20px",
  borderRadius: "5px",
  margin: "auto",
};

const CartItems = ({ item, handleUpdateCart, handleRemoveFromCart }) => {
  return (
    <div className="card ">
      <button
        style={{
          backgroundColor: "orange",
          color: "white",
          // borderRadius: "30px",
          padding: "10px",
          fontSize: "20px",
          border: "none",
          position: "absolute",
          right: 0,
          top: 0,
        }}
        onClick={() => handleRemoveFromCart(item.id)}
      >
        X
      </button>
      <img src={item.image.url} />
      <div>
        <h3> {item.name} </h3>

        <p className="mt-2" style={{ fontWeight: "bold", marginLeft: "5px" }}>
          price of 1 kg: {item.price.formatted_with_symbol}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          marginTop: "-50px",
          marginLeft: "153px",
          border: "1px solid gray",
          padding: "1px",
          borderRadius: "5px",
        }}
      >
        {/* طلع الخطا بس بكلمة كوانتيتي لازم اخليهة داخل كيرلي بركت */}
        <button
          onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
          style={btns}
        >
          -
        </button>
        <h4 style={{ marginLeft: "5px" }}> {item.quantity}kg </h4>

        <button
          onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
          style={btns}
        >
          +
        </button>
      </div>

      <div>
        {/* i have problem here not work yet */}
        {/* <button style={sytyle} onClick={() => handleUpdateCartQty(item.id, item.quantity)}> update</button> */}
      </div>
    </div>
  );
};

export default CartItems;
