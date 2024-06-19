import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { CategoryContext } from '../context/Category'

import { useContext} from 'react'





function Home() {
  const { getImages} = useContext(CategoryContext)
  const { products, addProduct  } = useContext(FetchAPIContext)

  return (
    <>
    <div className="container1">
    
      {products && products.map((product) => {
        
        return (
          
          <div key={product.id} className='container'>
            <div className='bild-container'><img src={getImages(product)} alt={product.title}/></div>
            <div className='addList__text'> 
            <h1>{product.title}</h1>
            <article>{product.description}</article>
            <p>${product.price}</p>
            <button className='button' onClick={() => addProduct(product)} >Add to Cart</button>
          </div></div>
          
        )
      })}
      </div>
    </>
  );
}

export default Home;