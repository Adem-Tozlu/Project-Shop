import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { CategoryContext } from '../context/Category'
import { useContext} from 'react'





function Realme() {
  const { realme,getImages } = useContext(CategoryContext)
    const { addProduct  } = useContext(FetchAPIContext)

  return (
    <>
    <div className="container1">
    
      {realme && realme.map((product) => {
        
        return (
          
          <div key={product.id} className='container'>
            <div className='bild-container'><img src={getImages(product)} alt={product.title}/></div>
            <div>
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

export default Realme;