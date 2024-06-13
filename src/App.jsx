import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddList from "./pages/AddList";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NotPages from "./pages/NotPages";
import FetchAPI from "./context/FetchAPI";

function App() {
  return (
    <>
    <FetchAPI>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addlist" element={<AddList />} />
        </Route>
        <Route path="*" element={<NotPages />} />
        <Route path="/fetchapi" element={<FetchAPI />} />
      </Routes>
      </FetchAPI>
    </>
  );
}

export default App;
