import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, setCartItems } = useContext(Context);
  const [order, setOrder] = useState("Place Order");

  const price = 5.99;

  const cost = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cartElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} cost={cost} />;
  });

  const totalCost = (
    <h3>
      Total cost:
      {" " +
        (price * cartElements.length).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
    </h3>
  );

  function placeOrder() {
    setOrder("Ordering...");
    setTimeout(() => {
      setCartItems([]);
      setOrder("Place Order");
    }, 3000);
  }

  return (
    <div className="cart">
      <h1>Check out</h1>
      {cartElements.length > 0 ? cartElements : "Your cart is empty"}
      <h2>{cartElements.length > 0 ? totalCost : ""}</h2>
      {cartElements.length > 0 ? (
        <button className="place-btn" onClick={() => placeOrder()}>
          {order}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;

// .toLocaleString("en-US", {style: "currency", currency: "USD"})
