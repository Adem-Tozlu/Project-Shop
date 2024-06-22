import React, { createContext, useEffect, useState, useID } from "react";

export const FetchAPIContext = createContext();

function FetchAPI({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  let numItem = cart.length;

  function randomID() {
    return Math.floor(Math.random() * 1000);
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Fehler beim laden", error);
        
      });
  }, []);

  const addProduct = (product) => {
    const productWithID = { ...product, UUID: randomID() };
    setCart([...cart, productWithID]);
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.UUID !== product.UUID));
  };

  const itemTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  
  return (
    <FetchAPIContext.Provider
      value={{ products, cart, numItem, addProduct, removeProduct, itemTotal }}
    >
      {children}
    </FetchAPIContext.Provider>
  );
}

export default FetchAPI;
