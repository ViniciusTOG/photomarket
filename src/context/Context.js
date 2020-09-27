import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  const [photos, setPhotos] = useState([]);

  function addToCart(id) {
    photos.map((photo) => {
      if (photo.id === id) {
        setCartItems([...cartItems, photo]);
      }
      return photo;
    });
  }

  function removeFromCart(id) {
    const newCart = cartItems.filter((item) => item.id !== id);
    setCartItems(newCart);
  }

  function toggleFavorite(id) {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  }

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        photos,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        toggleFavorite,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
