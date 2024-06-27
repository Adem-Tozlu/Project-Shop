import React, { createContext, useEffect, useState, useID } from "react";

export const FetchAPIContext = createContext();

function FetchAPI({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  let numItem = cart.length;

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
    const ProductIndex = cart.findIndex(item => item.id === product.id);
    if (ProductIndex !== -1) {
    
      const newCart = [...cart];
    
      newCart[ProductIndex].count += 1;
      console.log(newCart);
      setCart(newCart);
    } else {
     
      const productWithID = { ...product, count: 1 };
      setCart([...cart, productWithID]);
    }
  };

  const removeProduct = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const removeitem = (product) => {
    const ProductIndex = cart.findIndex(item => item.id === product.id);
    const newCart = [...cart];
    if (newCart[ProductIndex].count > 1) {
      newCart[ProductIndex].count -= 1;
      setCart(newCart);}
  };

  const itemTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2);
  };

  const cartempty = () => {
    return setCart([]);
  };

  return (
    <FetchAPIContext.Provider
      value={{
        products,
        cart,
        numItem,
        addProduct,
        removeProduct,
        itemTotal,
        cartempty,
        removeitem
      }}
    >
      {children}
    </FetchAPIContext.Provider>
  );
}

export default FetchAPI;
