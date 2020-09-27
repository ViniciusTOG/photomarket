import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function Header() {
  const { cartItems } = useContext(Context);
  console.log(cartItems.length);
  return (
    <div className="header">
      <Link style={{ textDecoration: "none" }} to="/">
        <p>PhotoMarket</p>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/cart">
        <i
          style={{ color: "white" }}
          className={
            cartItems.length > 0
              ? "ri-shopping-cart-fill ri-fw ri-2x"
              : "ri-shopping-cart-line ri-fw ri-2x"
          }
        >
          <span>{cartItems.length > 0 ? cartItems.length : ""}</span>
        </i>
      </Link>
    </div>
  );
}

export default Header;
