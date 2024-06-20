import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { CategoryContext } from '../context/Category'
import { useContext} from 'react'





function Vivo() {
  const { vivo,getImages } = useContext(CategoryContext)
    const { addProduct  } = useContext(FetchAPIContext)

  return (
    <main>
    <div className="product">
    
      {vivo && vivo.map((product) => {
        
        return (
          
          <div key={product.id} className='product__container'>
            <div className='product__bild-container'><img className='product__img' src={getImages(product)} alt={product.title}/></div>
            <div>
            <h1>{product.title}</h1>
            <article>{product.description}</article>
            <p>${product.price}</p>
            <button className='product__button' onClick={() => addProduct(product)} >Add to Cart</button>
          </div></div>
          
        )
      })}
      </div>
    </main>
  );
}

export default Vivo;