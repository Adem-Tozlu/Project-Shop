

import { CategoryContext } from "../context/Category";
import { useContext } from "react";

import { NavLink } from "react-router-dom";

function Home() {
  const { getImages, newHome } = useContext(CategoryContext);

  return (
    <main className="home">
      <h1 className="home__headline">Hightlights</h1>

      <div className="home__main-container">
        {newHome &&
          newHome.map((product) => {
            return (
              <div key={product.id} className="home__container">
                <div className="home__bild-container">
                  <img
                    className="home__img"
                    src={getImages(product)}
                    alt={product.title}
                  />
                </div>

                <div className="home__title_flat-container">
                  <h2 className="home__title">{product.brand}</h2>

                  <p className="home__flat-text">+ allnet flat </p>
                  <NavLink
                    to={`/${product.brand.toLowerCase()}`}
                    className="home__button"
                  >
                    More
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default Home;
