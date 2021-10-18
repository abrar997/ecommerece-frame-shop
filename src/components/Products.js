import React from "react";
import PrductSingle from "./PrductSingle";
import img1 from "./images/brok.jpg";
import "./style.css";


// instead of state


const h1Style = {
  textTransform: "capitalize",
  color: " rgba(0, 0, 0, 0.753)",
  margin: "10px 0px 40px 30px",
  borderBottom: "6px solid orange",
  width: "370px",
  textShadow: "1px 1px 1px green"

};
export const Products = ({ products, onAddToCart }) => {
  return (

<div>
      <div className="container mt-4">
        <div className="row">
          <h1 style={h1Style}>our fresh products </h1>

          <div className="cards">
            {/* access data or show data from eccommerece by map  */}
            {products.map((product, ind) => {
              //   never forget return
              return (
                <div key={ind} className="col-lg-3">
                  {/* trans data to another component as props and loop on it as formula in new component  */}
                  <h1>{product.categories.name} </h1>

                  <PrductSingle product={product} onAddToCart={onAddToCart} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
