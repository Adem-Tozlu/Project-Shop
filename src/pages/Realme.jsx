
import { FetchAPIContext } from "../context/FetchAPI";
import { CategoryContext } from "../context/Category";
import { useContext, useState } from "react";
import { TbArrowBackUp } from "react-icons/tb";

function Realme() {
  const { realme, getImages } = useContext(CategoryContext);
  const { addProduct } = useContext(FetchAPIContext);
  const [show, setShow] = useState(true);
  const closeNav = (id) => setShow(id);

  return (
    <main className="product__main">
      <div className="product">
        {realme &&
          realme.map((product) => {
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
                  <h1 className="product__title">{product.title}</h1>

                  <p className="product__price">${product.price}</p>
                  <button
                    className="product__button"
                    onClick={() => closeNav(product.id)}
                  >
                    Details
                  </button>
                </div>
                <div style={{ display: show === product.id ? "" : "none" }}>
                  <article className="product__description">
                    {product.description}
                  </article>

                  <button
                    onClick={() => {
                      setShow(true);
                    }}
                    className="product__back-icon"
                  >
                    {" "}
                    <TbArrowBackUp />{" "}
                  </button>
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

export default Realme;
