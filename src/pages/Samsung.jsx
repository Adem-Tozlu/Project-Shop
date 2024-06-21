import React from "react";
import { FetchAPIContext } from "../context/FetchAPI";
import { CategoryContext } from "../context/Category";
import { useContext, useState } from "react";

function Samsung() {
  const { samsung, getImages } = useContext(CategoryContext);
  const { addProduct } = useContext(FetchAPIContext);
  const [show, setShow] = useState(true);
  const closeNav = (id) => setShow(id);

 
    
    
   

  return (
    <main>
      <div className="product">
        {samsung &&
          samsung.map((product) => {
            return (
              <div key={product.id} className="product__container">
                <div className="product__bild-container">
                  <img
                    className="product__img"
                    src={getImages(product)}
                    alt={product.title}
                  />
                </div>

                <div style={{ display: show === product.id ? "none" : "" }}>
                  <h1>{product.title}</h1>
                 
                  <p>${product.price}</p>
                  <button
                    className="product__button"
                    onClick={()=>closeNav(product.id)}
                  >
                    Details
                  </button>
                </div>
                <div style={{ display: show === product.id ? "" : "none" }}>
                  <h1>{product.title}</h1>
                  <article>{product.description}</article>
                  <p>${product.price}</p>
                  <button
                    className="product__button"
                    onClick={() => addProduct(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default Samsung;
