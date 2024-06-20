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
    <>
     <h1 className='home_headline'>Hightlights</h1>

    <div className="container1">
     
    
      {newHome && newHome.map((product) => {
        
        
        return (
          
          <div key={product.id} className='container'>
           
            <div className='bild-container'><img src={getImages(product)} alt={product.title}/></div>
           
            <div className='addList__text'> 
            <h2>{product.title}</h2>
            
            <p>${product.price}</p>
            <NavLink to={`/oppo`} className='button'>More</NavLink>
          </div></div>
          
        )
      })}
      </div>
    </>
  );
}

export default Home;