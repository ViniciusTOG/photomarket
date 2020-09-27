import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

function CartItem({ item, cost }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="cart-element">
      <img src={item.url} alt={item.id} />
      <div className="cart-div">
        <p>Price: {cost}</p>
        <i
          className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
          onClick={() => removeFromCart(item.id)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></i>
      </div>
    </div>
  );
}

export default CartItem;
