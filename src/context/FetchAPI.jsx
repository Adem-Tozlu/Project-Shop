import React, { createContext, useEffect, useState } from 'react';

export const FetchAPIContext = createContext()


function FetchAPI({ children }) {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])


  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=phone')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products || []);
      });

  }, []);


  const addProduct = (product) => {
    setCart([...cart, product])
  };

  const removeProduct = (product) => {
    const indexToRemove = cart.findIndex((item) => item.id === product.id)


if (indexToRemove !== -1) {
    const updateProducts = [...cart.slice(0, indexToRemove), ...cart.slice(indexToRemove + 1)];
    setCart(updateProducts);
  }};
  return (

    <FetchAPIContext.Provider value={{ products, cart, addProduct, removeProduct }}>
      {children}
    </FetchAPIContext.Provider>

  )
};

export default FetchAPI