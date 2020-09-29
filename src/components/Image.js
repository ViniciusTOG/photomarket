import React, { useContext } from "react";
import { Context } from "../context/Context";
import useHover from "../hooks/useHover";

function Image({ img, className }) {
  const [hovered, ref] = useHover();
  const { cartItems, addToCart, removeFromCart, toggleFavorite } = useContext(
    Context
  );

  function heartIcon(img) {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill heartIcon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line heartIcon"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  function cartIcon(img) {
    if (cartItems.some((item) => item.id === img.id)) {
      return (
        <i
          className="ri-shopping-cart-fill cartIcon"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cartIcon"
          onClick={() => addToCart(img.id)}
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      <img src={img.url} alt={img.id} />
      {heartIcon(img)}
      {cartIcon(img)}
    </div>
  );
}

export default Image;

/* <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i> */

/* <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i> */

// "ri-heart-line heartIcon"
