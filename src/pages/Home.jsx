import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import {  useContext } from 'react'


function Home() {
    const {products} = useContext(FetchAPIContext)
    return (
      <>
        {products.map((product) => (
          <div key={product.id}><h3>{product.id}</h3>
          </div>
        ))}
      </>
    );
}
  
  export default Home;