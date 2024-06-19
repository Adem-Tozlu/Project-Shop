import React, { createContext, useEffect, useState } from 'react';

export const FetchAPIContext = createContext()


function FetchAPI({ children }) {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  let numItem =  cart.length



  


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
    const indexToRemove = cart.findIndex((item) => item.id === product.id);
    if (indexToRemove !== -1) {
    const newCart =[...cart.slice(0, indexToRemove),
            ...cart.slice(indexToRemove + 1)]
      setCart(newCart);
    }
  };

  const itemTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    
  }
  return (

    <FetchAPIContext.Provider value={{ products, cart, numItem,addProduct, removeProduct,itemTotal }}>
      {children}
    </FetchAPIContext.Provider>

  )
};

export default FetchAPI