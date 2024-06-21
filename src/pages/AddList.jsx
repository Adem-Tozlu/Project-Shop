import React from "react";
import { FetchAPIContext } from "../context/FetchAPI";
import { CategoryContext } from '../context/Category'

import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function AddList() {
  const { cart, removeProduct, itemTotal } = useContext(FetchAPIContext);
  const { getImages } = useContext(CategoryContext);

  return (
    <main className="main">
      {cart && cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <div key={product.UUID} className="addlist">
              <div className="addlist__container">
                <div className="addlist__bild-container">
                  <img className="addlist__img" src={getImages(product)} alt={product.title}/>
                </div>
                <div className="addList__text">
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <button className="addlist__button" onClick={() => removeProduct(product)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className="addlist__buy--total">
            <p className="addlist__total-text">Total: ${itemTotal()}</p>
            <button className="addlist__button--buy">Buy</button>
          </div>
        </>
      ) : (
        <div className="addlist__cart-empty">
          <MdOutlineShoppingCart className="icon" />
          <p>Your shopping cart is empty. Shop now!</p>
        </div>
      )}
    </main>
  );
}

export default AddList;
