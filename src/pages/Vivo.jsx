import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { CategoryContext } from '../context/Category'
import { useContext} from 'react'





function Vivo() {
  const { vivo } = useContext(CategoryContext)
    const { addProduct  } = useContext(FetchAPIContext)

  return (
    <>
    <div className="container1">
    
      {vivo && vivo.map((product) => {
        
        return (
          
          <div key={product.id} className='container'>
            <div className='bild-container'><img src="../public/images/Apple AirPods Max Silver.jpg" alt="Apple AirPods Max Silver" /></div>
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

export default Vivo;