import { FetchAPIContext } from './FetchAPI'
import React, { createContext, useEffect, useState,useContext } from 'react';


export const CategoryContext = createContext()


function Category({children}) {

  const { products  } = useContext(FetchAPIContext)

    const samsung = products.filter((product) => product.brand === 'Samsung')
    const apple = products.filter((product) => product.brand === 'Apple')
    const realme = products.filter((product) => product.brand === 'Realme')
    const vivo = products.filter((product) => product.brand === 'Vivo')
    const oppo = products.filter((product) => product.brand === 'Oppo')
    return (

      <CategoryContext.Provider value={{samsung,apple,realme,vivo,oppo }}>
        {children}
      </CategoryContext.Provider>
  
    )
}
export default Category
