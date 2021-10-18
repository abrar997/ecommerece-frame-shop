import React from "react";
import { Link } from "react-router-dom";
import CartItems from "./components/CartItems";
// cart depend on id to get card like tomato and lineitems  to change numbers on basket(shopping ) in nav bar and subtotal
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  // we will use simple function return jsx codes and calling it as normal component عجيببب must start with Capital letter

  // normal const as state 1-
  //   a-
  //   const isEmpty = true;
  // b-
  // const isEmpty=cart.line_items.length===0 //meanst empty  bit we will have beauty error stop our working bcz this number will change notconstant in 0
  // or c-

  //   const isEmpty = !cart.line_items ; //also means empty but this mark give a chance to between is empty or not

  // change curly brucket{} to apartheness brucket() it means return
  //   empty cart

  const renderEmptyCart = () => (
    <h3>
      you have no items in your shopping cart ,
      <Link to="./Products"> start adding some !</Link>{" "}
    </h3>
  );

  // syntax od cards in cart
  //key={item.id} same result all ofthem solve error

  {
    /* //key={item.id} same result all ofthem solve error */
  }
  const renderCart = () => (
    <div className="cards">
      {/* dearl abrar never forget return you will have no result if you forget write it  */}
      {cart.line_items.map((item, ind) => {
        return (
          <div key={ind}>
            <CartItems
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>
        );
      })}

      <div className="col-lg-12">
        {/* u don't need callback(()=>handleEmptyCart)  function if you write your button will not works */}
        <h3>subtotal: {cart.subtotal.formatted_with_symbol} </h3>
        <button
          style={{
            width: "300px",
            border: "none",
            backgroundColor: "rgba(0, 0, 0, 0.653)",
            color: "white",
            borderRadius: "20px",
            padding: "20px",
          }}
          onClick={handleEmptyCart}
        >
          Empty cart
        </button>
      </div>
    </div>
  );

  const h1Style = {
    // textTransform: "upperCase",
    color: " rgba(0, 0, 0, 0.653)",
    margin: "30px 0px 40px 60px",
    borderBottom: "6px solid orange",
    width: "300px",
    fontFamily: '"Alegreya", serif',
    fontFamily: '"Berkshire Swash", cursive',
    paddingBottom: "10px",
  };

  // خذي الطريقة الثاني هم تحل error  length
  // if (!cart.line_items) return "...loading";

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 style={h1Style}>Shopping Cart</h2>

          <div
            style={{
              boxShadow: "1px 1px 17px  rgb(221, 218, 218)",
              marginTop: "10px",
            }}
          >
            {/*  اذا اكو شي بالكارت مالتي عرضلي
             FilledCart
             واللي بيهةcartItems
            واذا فارغة طلع emptycart 
             */}
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}

            {/* length problem solved by two ways ///1_ by add in App.js ,,,,, const [cart,setCart]=useState({ line_items: [] })(Solution Provide valid initial state for the initial render so there’s a truthy, defined cart.line_items object from which to have a length property, i.e. so !cart.line_items.length; can resolve to a value and not throw an error.) ///2_ add in cart.js if (!cart.line_items) return "...loading";
         and this error (This is happens because cart content doesnt load from e-commerce api immediately when page open and then because of the error it stuck like that.)       */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
