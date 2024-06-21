

import "./styles/complett/_index.scss";
import "./styles/Footer.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FetchAPI from "./context/FetchAPI";

import Category from "./context/Category";
import {Home, AddList, NotPages, Samsung, Apple, Realme, Vivo, Oppo,Accessories } from "./pages";
function App() {
  return (
    <>
    <FetchAPI>
      <Category>
      <Routes>
      
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          <Route path="/samsung" element={<Samsung />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="/realme" element={<Realme />} />
          <Route path="/vivo" element={<Vivo />} />
          <Route path="/oppo" element={<Oppo />} />
          <Route path="/accessories" element={<Accessories />} />

          <Route path="/addlist" element={<AddList />} />
         
         
        </Route>
        
        <Route path="*" element={<NotPages />} />
       
      </Routes>
     
     </Category>
      </FetchAPI>
      
    </>
  );
}

export default App;
