import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const FetchAPIContext = createContext()


function FetchAPI( {children} ) {

    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
        .then(response => response.json())
        .then(data => setProduct(data))
    
    }, [])
    console.log(products);

  return (
    <>
   <FetchAPIContext.Provider value={products}>


    {children}
   </FetchAPIContext.Provider>
    </>
  )
}

export default FetchAPI