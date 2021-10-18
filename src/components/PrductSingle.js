
// final formula to run data in browser after get it from main compo (App) to fatjher product Component

import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

// import "./style.css";


const style={
  display:'flex',
  flexFlow:'row',
  justifyContent:'space-around',
  textTransform:'capitalize'

}

const PrductSingle = ({ product, onAddToCart }) => {
  //product is prop from Product.js written in this syntax bcz we use rafce

  return (
    <div className="card ">
      <img src={product.image.url} />
      <div style={style}>
        <h3> {product.name} </h3>
        <p className="mt-2" style={{ fontWeight: "bold" }}>
          {product.price.formatted_with_symbol}
        </p>
      </div>
      <div style={style}>
        {/* to solve this problem we can replace this code by another one as bellow  */}
        {/* <h6>{product.description} </h6> */}
        {/* by add JSX attributes   dangerouslySetInnerHTML={{__html: to convert inner text code to inner html code  }} */}

        <h6 dangerouslySetInnerHTML={{ __html: product.description }} />

        <Link to="/">
          <IoIosAddCircleOutline
            style={{
              backgroundColor: "orange",
              color: "white",
              borderRadius: "50%",
              padding: "0px",
              fontSize: "40px",
            }}
     
            onClick={() => onAddToCart(product.id, 1)}
          />
        </Link>
      </div>
    </div>
  );
};

export default PrductSingle;
