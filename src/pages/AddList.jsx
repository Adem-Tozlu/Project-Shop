
import { FetchAPIContext } from "../context/FetchAPI";
import { CategoryContext } from "../context/Category";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { FaMinus } from "react-icons/fa6";

import { IoTrashOutline } from "react-icons/io5";

import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function AddList() {
  const { cart, removeProduct,addProduct ,removeitem, itemTotal } = useContext(FetchAPIContext);
  const { getImages } = useContext(CategoryContext);
  const navigate = useNavigate();



  return (
    <main className="addlist">
      {cart && cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <div key={product.id}>
              <div className="addlist__container">
                <div className="addlist__bild-container">
                  <img
                    className="addlist__img"
                    src={getImages(product)}
                    alt={product.title}
                  />
                </div>
                <div className="addlist__text">
                  <h1 className="product__title">{product.title}</h1>

                  <p className="product__price">${product.price}</p>
                  <button
                    className="addlist__button"
                    onClick={() => removeProduct(product)}
                  >
                    <IoTrashOutline />

                  </button>
                  <div className="addlist__product-count-container"><button className="addlist__product-count--button">
                  <FaPlus 
                    onClick={() => addProduct(product)} />

                  </button>
                  <span className="addlist__product-count">{product.count}</span>
                  <button className="addlist__product-count--button">
                  <FaMinus onClick={()=> removeitem(product)}/>

                  </button>
</div>
                  
                </div>
              </div>
            </div>
          ))}
          <div className="addlist__buy--total">
            <p className="addlist__total-text">Total: ${itemTotal()}</p>
            <button
              onClick={() => navigate("/login")}
              className="addlist__button--buy"
            >
              Buy
            </button>
          </div>
        </>
      ) : (
        <div className="addlist__cart-empty">
          <MdOutlineShoppingCart className="addlist__cart-empty-icon" />
          <p>
            Your shopping cart is empty.{" "}
            <span
              onClick={() => navigate("/")}
              className="addlist__cart-empty-shop-now"
            >
              Shop now!
            </span>
          </p>
        </div>
      )}
    </main>
  );
}

export default AddList;
