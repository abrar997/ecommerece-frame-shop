import React, { useState, useEffect} from "react";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products";
import { commerce } from "./commerece";
import Cart from "./Cart";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

// import { Switch, Route } from "react-router";

// import vegtable from '@chec/commerce.js'
export const App = () => {
  //  1  get data from ecommerece js
  const [product, setProduct] = useState([]); //as state by rce state={products:[]}


  // 2 cart بسم الله على بركة الله
  // a
  const [cart, setCart] = useState({ line_items: [] });
//  b
  // حتي نحل مشكلة length ewwor with condition
  // if (!cart.line_items) return "...loading"; in cart.js
  // const [cart, setCart] = useState({});

  // 1-
  const fetchProduct = async () => {
    // const  forma from ecoomerece documentation
    const { data } = await commerce.products.list();
    setProduct(data);
  };

  // 2-get cart data from products

  const fetchCart = async () => {
    // استرجاع
    const cart = await commerce.cart.retrieve(); //get a cart and immedietly  get
    setCart(cart);
  };
  // 2 A -add
  // -add to cart  transfer as props from app.js to basket shopping icon by  onAddToCart={this.handleAddToCart}

  //  productId The ID of the product being added ,quantity The quantity of the product being added
  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart); //it means  item after  cart add
  };

  // 2B update //aihhhhh not work yet &  i don't know what is a problem but in shaa Allah i will solve it
  // اشتعلت بس شون والله مدريz
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.update(lineItemId, quantity); //update all  items depending on its id and the quantity
    setCart(cart);
  };

  // 2C  Remove  work already by using callback function with its arguments inside onClick button
  const handleRemoveFromCart = async (lineItemId) => {
    //remove items
    const { cart } = await commerce.cart.remove(lineItemId);
    setCart(cart);
  };

  //2D Clear cart empty cart dearly

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty(); //run already with out problem ad does not need any other jsut transf by props to cart,js and put it inside button onClick={}
    setCart(cart); //or as u write it (empty.cart),(remove.cart)...etc
  };

  // to print data from products ecommerece js in console
  // console.log(product);
  // console.log(cart);

  // call function to run and update just when u open page
  useEffect(() => {
    // call function to run and update just when u open page
    fetchProduct();
    fetchCart();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* //number on basket so easy اللهم سهل  */}
        <Nav totalItems={cart.total_items} />
        {/* transfer data from state (component App) as props to another component  */}
        {/* <Products products={product} onAddToCart={handleAddToCart} />
        <Cart
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemoveFromCart={handleRemoveFromCart}
        /> */}

        <Switch>
          <Route path="/" exact>
            <Products products={product} onAddToCart={handleAddToCart} />
          </Route>

          <Route path="/Cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

// categories from data in console.log
//  category from dashboard
//   const { data: categories } = await commerce.categories.list();

//   // this way back to advanced hooks
//   const productpreCategories = categories.reduce((acc, category) => {

//     return [
//       ...acc, //يعني جيب الاتا كلة هذي 3 تقاط
//       {
//         ...category, //جيب كل اتوواع category
//         productsData: product.filter((product) => {
//           product.categories.find((category) => category.id === category.id);
//         }),
//       },
//     ];
//   }, []);
// setProduct(response && response.data);
// as setState ({ products:data })
