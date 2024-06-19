import React from "react";
import { FetchAPIContext } from "../context/FetchAPI";
import { CategoryContext } from '../context/Category'

import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function AddList() {
  const { cart, removeProduct, itemTotal } = useContext(FetchAPIContext);
  const { getImages} = useContext(CategoryContext)


  return (
    <>
      {cart &&
        cart.map((product) => {
         // const { depth, height, width } = product.dimensions || {};
          return (
            <main className="main">
              <div key={product.id} className="container">
                <div className="bild-container">
                <img src={getImages(product)} alt={product.title}/>
                </div>
                <div className="addList__text">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button
                  className="button"
                  onClick={() => removeProduct(product)}
                >
                  Remove
                </button>
                </div>
              </div>
            </main>
          );
        })}
      {cart.length > 0 ? (
        <div className="block">
          <p>Total: ${itemTotal()}</p>
          <button className="button--buy">Buy</button>
        </div>
      ) : (
        <>
          <main className="main">
            <div>
              {" "}
              <MdOutlineShoppingCart className="icon" />
            </div>
            <p>Your shopping cart is empty. Shop now!</p>
          </main>
        </>
      )}
    </>
  );
}

export default AddList;
