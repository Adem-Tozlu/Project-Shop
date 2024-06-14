import React from "react";
import { FetchAPIContext } from "../context/FetchAPI";
import { useContext } from "react";

function AddList() {
  const { cart, removeProduct, itemTotal } = useContext(FetchAPIContext);

  return (
    <>
      
      {cart &&
        cart.map((product) => {
          const { depth, height, width } = product.dimensions || {};
          return (
            <>
              <div key={product.id} className="container">
                {product.images &&
                  product.images.map((image, index) => {
                    return (
                      <img
                        key={index}
                        src={image}
                        alt={image.alt || "Product Image"}
                      />
                    );
                  })}
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>Depth: {depth}</p>
                <p>Height: {height}</p>
                <p>Width: {width}</p>
                <button
                  className="button"
                  onClick={() => removeProduct(product)}
                >
                  Remove
                </button>
              </div>
            
            </>
            
          );
          
        })}
         {cart.length > 0 ? (
  <div>
    <p>Total: ${itemTotal()}</p>
    <button className="button">Buy</button>
  </div>
) : (
  <p>The cart is empty!</p>
)}
         
    </>
  );
}

export default AddList;
