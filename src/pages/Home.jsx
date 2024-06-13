import React from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { useContext} from 'react'



function Home() {
  const { products, addProduct  } = useContext(FetchAPIContext)

  return (
    <>
      {products && products.map((product) => {
        const { depth, height, width } = product.dimensions || {};
        return (
          <div key={product.id} className='container'>
            {product.images.map((image, index) => {
              return <img key={index} src={image} alt={image.alt || 'Product Image'} />
            })}
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Depth: {depth}</p>
            <p>Height: {height}</p>
            <p>Width: {width}</p>
            <button className='button' onClick={() => addProduct(product)} >Add to Cart</button>
          </div>
        )
      })}
    </>
  );
}

export default Home;