import React, { useContext } from "react";
import { Context } from "../context/Context";
import useHover from "../hooks/useHover";

function CartItem({ item, cost }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, ref] = useHover();

  return (
    <div className="cart-element">
      <img src={item.url} alt={item.id} />
      <div className="cart-div">
        <p>Price: {cost}</p>
        <i
          className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
          onClick={() => removeFromCart(item.id)}
          ref={ref}
        ></i>
      </div>
    </div>
  );
}

export default CartItem;
