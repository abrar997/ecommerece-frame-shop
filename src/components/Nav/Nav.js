import React, { Fragment } from "react"
import {BrowserRouter as Router,NavLink,} from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import "./Nav.css";




const Nav = ({ totalItems }) => {
  const nav = {
    boxShadow: "1px 1px 17px rgb(226, 225, 225)",
    color: "orange",
  };

  const link = {
    color: "orange",
    marginRight: "10px",
    fontWeight: "bold",
    fontSize: "24px",
    position: "relative",
    fontFamily: '"Alegreya", serif',
    fontFamily: '"Berkshire Swash", cursive',
    textDecoration: "none",  
    textShadow: "1px 1px 1px #0E0E0E"

  };
  const ul = {
    listStyleType: "none",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "600",
    marginTop: "10px",
  };

  const linkli = {
    fontFfamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    marginRight: "10px",
    color:"black",
    textDecoration:"none",
    fontSize:"20px",

  };

  return (
    <section className="nav">
    <div className="container mt-4">
      <div className="row">
        <Fragment>
          <div className="wrap">
            <nav className="navbar" style={nav}>
              <div className="container-fluid">
                <a className="navbar-brand" style={link}>
                  code/ <span style={{ color: "green" }}> Mu.</span>
                </a>
                <div>
                <form className="form-inline" style={{width:"300px"}}>
                  <input className="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search"/>
                </form></div>


                <div className="d-flex" id="product">
                  <NavLink to="/Products " style={link}>
                    Products
                  </NavLink>

                  <NavLink to="/Cart" style={link}>
                    <HiShoppingCart />
                  </NavLink>
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "40px",
                      backgroundColor: "green",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "12px",
                      padding: "5px",
                    }}
                  >
                    {totalItems}
                  </span>
                </div> 
              </div>


            </nav>
          </div>
        </Fragment>
      </div>
    </div></section>
  );
};

export default Nav;

