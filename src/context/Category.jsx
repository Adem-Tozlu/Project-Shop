import { FetchAPIContext } from './FetchAPI'
import React, { createContext, useEffect, useState,useContext } from 'react';
import {imagesArray }from '../components/images'


export const CategoryContext = createContext()


function Category({children}) {
 

  const { products  } = useContext(FetchAPIContext)

  
  function getImages(product) {
    
    const imageObj = imagesArray.find((img) => img.name === product.title);
    if(imageObj)
    return imageObj.images;
  }
 

 
    const samsung = products.filter((product) => product.brand === 'Samsung')
    
    const apple = products.filter((product) => product.brand === 'Apple'&&product.category==="smartphones")
    const realme = products.filter((product) => product.brand === 'Realme')
    const vivo = products.filter((product) => product.brand === 'Vivo')
    const oppo = products.filter((product) => product.brand === 'Oppo')
    const accessories = products.filter((product)=>product.category === "mobile-accessories")
    return (

      <CategoryContext.Provider value={{samsung,apple,realme,vivo,oppo,accessories,getImages}}>
        {children}
      </CategoryContext.Provider>
  
    )
}
export default Category
