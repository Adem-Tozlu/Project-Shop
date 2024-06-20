import React, { useState } from 'react'
import { FetchAPIContext } from '../context/FetchAPI'
import { CategoryContext } from '../context/Category'
import { useContext} from 'react'
import { highlights } from "../components/highlights";
import { NavLink,} from "react-router-dom";





function Home() {
  const { getImages,newHome} = useContext(CategoryContext)
  const { products, addProduct  } = useContext(FetchAPIContext)



  
    


  return (
   
    <main>
      <h1 className='home__headline'>Hightlights</h1>

    <div className="home__main-container">
     
    
      {newHome && newHome.map((product) => {
        
        
        return (
          
          <div key={product.id} className='home__container'>
           
            <div className='home__bild-container'><img className='home__img' src={getImages(product)} alt={product.title}/></div>
           
            <div className='addList__text'> 
            <h2>{product.title}</h2>
            
            <p>${product.price}</p>
            <NavLink to={`/${product.brand.toLowerCase()}`} className='addlist__button'>More</NavLink>
          </div></div>
          
        )
      })}
      </div>
    </main>
  );
}

export default Home;