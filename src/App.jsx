

import "./styles/complett/_index.scss";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FetchAPI from "./context/FetchAPI";

import Category from "./context/Category";
import {Home, AddList, NotPages, Samsung, Apple, Realme, Vivo, Oppo,Accessories,Login } from "./pages";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <div className="content">
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
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/addlist" element={<AddList />} />
                <Route path="/login" element={<Login/>}/>
              </Route>
              <Route path="*" element={<NotPages />} />
            </Routes>
          </Category>
        </FetchAPI>
      </div>
      
    </>
  );
}

export default App;
